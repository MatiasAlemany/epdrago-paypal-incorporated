"use server";

import axios from "axios";
import { db } from "../db";
import { mercadopago_accesskeys } from "../db/schema/mp_access_keys";
import { InsertPayment, payment_schema } from "../db/schema/payment";
import { type PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

export async function testPaymentAccess() {
    const paymentUrl = `https://api.mercadopago.com/v1/payments/76156939416`;
    const other = "76156939416";
    const accessKeys: string[] = (await db.select().from(mercadopago_accesskeys)).map((e) => e.value);



    for await (const iterator of accessKeys) {
        try {

            const payment: PaymentResponse = (await axios.get(paymentUrl, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${iterator}`
                }
            })).data;
            const paymentInsertValues: InsertPayment = {
                id: payment.id!,
                item_title: "Cursp prueba",
                net_amount: Math.round(payment.transaction_details!.net_received_amount!),
                payerName: payment.payer!.first_name,
                course_id: "46fd7be8-ebde-4e5a-873d-760a7da68768",
                user_id: "user_2eBMtDpYxRvtHgiUb4p6rqZa1k6",
            }

            await db.insert(payment_schema).values(paymentInsertValues);

            console.log("Payment Inserted");
            return;
        } catch (error) {
            console.log("Access key with error");        }
    }








}