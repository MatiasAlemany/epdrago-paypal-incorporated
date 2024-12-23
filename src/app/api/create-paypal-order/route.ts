import { db } from "@/lib/db"; // Conexión a tu base de datos
import { courses } from "@/lib/db/schema/course"; // Esquema de cursos
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const { course_id } = await req.json(); // Recibe el ID del curso desde el frontend
  //console.log("COURSE ID recibido del frontend:", course_id);

  const client_id = process.env.PAYPAL_CLIENT_ID;
  const client_secret = process.env.PAYPAL_CLIENT_SECRET;

  try {
    // Obtener el curso de la base de datos
    const course = await db
      .select()
      .from(courses)
      .where(eq(courses.id, course_id))
      .execute();
    if (!course) {
      return NextResponse.json(
        { error: "Curso no encontrado" },
        { status: 404 }
      );
    }
   // console.log("Curso encontrado:", course);
    // Obtener el precio del curso en pesos
    const priceInPesos = course[0]?.price;
   // console.log("Precio en pesos:", priceInPesos);

    // Convertir el precio a dólares
    const getExchangeRate = async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/ARS"
      );
      const data = await response.json();
      return data.rates.USD; // Tipo de cambio de ARS a USD
    };

    const convertToUSD = async (priceInPesos: number) => {
      const exchangeRate = await getExchangeRate();
      return (priceInPesos * exchangeRate).toFixed(2); // Precio en USD
    };

    const priceInUSD = await convertToUSD(priceInPesos || 0);
   // console.log("Precio en USD:", priceInUSD);

    // Crear la orden en PayPal
    const paypalResponse = await fetch(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString("base64")}`,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: priceInUSD,
              },
              description: course[0]?.title,
            },
          ],
        }),
      }
    );

    

    const data = await paypalResponse.json();
  // console.log("Respuesta de PayPal:", data);
    
    if (!paypalResponse.ok) {
      return NextResponse.json({ error: data }, { status: 400 });
    }

    // Devolver el orderID al frontend
    return NextResponse.json({ orderID: data.id });
  } catch (error) {
    console.error("Error al crear la orden de PayPal:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
