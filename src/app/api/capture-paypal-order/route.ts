import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const client_id = process.env.PAYPAL_CLIENT_ID;
  const client_secret = process.env.PAYPAL_CLIENT_SECRET;

  try {
    // Obtener el orderId del body de la solicitud
    const { orderId } = await req.json();
    if (!orderId) {
      return NextResponse.json(
        { error: "Falta el orderId en la solicitud" },
        { status: 400 }
      );
    }

    const paypalResponse = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`, // Usa 'sandbox' en desarrollo
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString("base64")}`,
        },
      }
    );
    // Procesar la respuesta de PayPal
    const data = await paypalResponse.json();

    if (!paypalResponse.ok) {
      console.error("Error al capturar el pago:", data);
      return NextResponse.json({ error: data }, { status: 400 });
    }

    console.log("Pago capturado exitosamente:", data);
    return NextResponse.json({ success: true, data }); // Respuesta exitosa al cliente
  } catch (error) {
    console.error("Error al capturar el pago:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
