import { MetadataPreference } from "@/lib/actions/create_preference";
import { getFirstModuleOfCourse } from "@/lib/actions/edit/modules_actions";
import { db } from "@/lib/db";
import { courses } from "@/lib/db/schema/course";
import { course_progress } from "@/lib/db/schema/course_progress";
import { InsertPayment, payment_schema } from "@/lib/db/schema/payment";
import { usersToCourses } from "@/lib/db/schema/users_to_courses";
import { paymentNotification } from "@/lib/types/payment_notification";
import axios from "axios";
import { eq } from "drizzle-orm";
import { type PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {

    console.log("receiving test")
    return NextResponse.json({message:"ok"}, {status: 200});

    // const body_data = await new Response(req.body).json();
    // const paymentNotificationParsed = paymentNotification.safeParse(body_data);
    // if (!paymentNotificationParsed.success) return NextResponse.json({ message: "No Payment notification" }, { status: 200 });

    // const notification = paymentNotificationParsed.data;

    // const paymentUrl = `https://api.mercadopago.com/v1/payments/${+notification.data.id}`

    // try {
    //     const payment: PaymentResponse = (await axios.get(paymentUrl, {
    //         headers: {
    //             "Content-Type": 'application/json',
    //             Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`
    //         }
    //     })).data;
    //     if (payment.status_detail == 'accredited') {
    //         console.log('Got a payment');
    //     }
    //     const metadata = payment.metadata as MetadataPreference;
    //     const paymentInsertValues: InsertPayment = {
    //         id: payment.id!,
    //         item_title: metadata.product_title,
    //         net_amount: payment.transaction_details!.net_received_amount!,
    //         payerName: payment.payer!.first_name,
    //         course_id: metadata.product_id,
    //         user_id: metadata.user_id,
    //     }


    //     console.log(paymentInsertValues);
    //     const paymentDB = await db.insert(payment_schema).values(paymentInsertValues);
    //     await db.insert(usersToCourses).values({ course_id: metadata.product_id, user_id: metadata.user_id });
    //     const firstModule = await getFirstModuleOfCourse(metadata.product_id);
    //     if (firstModule == undefined) {
    //         throw Error('First Module not found!');
    //     }
    //     await db.insert(course_progress).values({
    //         isFinished: false,
    //         module_number: 0,
    //         user_id: metadata.user_id,
    //         course_id: metadata.product_id,
    //         module_id: firstModule.id
    //     })


    //     console.log('course bought!!');



    // } catch (error) {
    //     console.log(error);
    //     return NextResponse.json({ message: "ERROR ON SAVING TO DB" }, { status: 500 });

    // }


    // return NextResponse.json({ message: "Payment Succesfull!!" }, { status: 400 });






}


export { handler as GET, handler as POST };

