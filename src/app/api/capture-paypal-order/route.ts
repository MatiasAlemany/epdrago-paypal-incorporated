import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { usersToCourses } from "@/lib/db/schema/users_to_courses";
import { course_progress } from "@/lib/db/schema/course_progress";
import { getFirstModuleOfCourse } from "@/lib/actions/edit/modules_actions";

export async function POST(req: NextResponse) {
  const user = await currentUser();

  if (!user) {
    console.error("No user is logged in");
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  }

  const userId = user.id; 
  console.log("User ID:", userId);

  let requestBody;
  try {
    requestBody = await req.json(); 
    console.log("DATA", requestBody);
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { course_id, orderId } = requestBody;
  console.log("DATA", requestBody);

  const client_id = process.env.PAYPAL_CLIENT_ID;
  const client_secret = process.env.PAYPAL_CLIENT_SECRET;

  if (!orderId) {
    return NextResponse.json(
      { error: "Falta el orderId en la solicitud" },
      { status: 400 }
    );
  }

  try {
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

    const data = await paypalResponse.json();
    console.log("Respuesta de PayPal:", data);

    if (!course_id || !userId) {
      console.error("courseId or userId is undefined");
      return NextResponse.json(
        { message: "Invalid courseId or userId" },
        { status: 400 }
      );
    }

    try {
      // Insertar el usuario y curso en la base de datos
      await db.insert(usersToCourses).values({
        course_id: course_id,
        user_id: user.id,
      });

      // Obtener el primer módulo del curso
      const firstModule = await getFirstModuleOfCourse(course_id);
      if (!firstModule) {
        throw new Error("First module not found");
      }

      // Insertar el progreso inicial del curso
      await db.insert(course_progress).values({
        isFinished: false,
        module_number: 0,
        user_id: userId,
        course_id: course_id,
        module_id: firstModule.id,
      });

      return NextResponse.json(
        { message: "Payment and course added successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving data to database", error);
      return NextResponse.json(
        { message: "Error saving to database" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in PayPal capture API", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
