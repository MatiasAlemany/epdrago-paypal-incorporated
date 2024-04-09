"use server";

import axios from "axios";
import { db } from "../db";
import { mercadopago_accesskeys } from "../db/schema/mp_access_keys";

export async function testPaymentAccess() {
    const paymentUrl = `https://api.mercadopago.com/v1/payments/73969055459`;

    const accessKeys: string[] = (await db.select().from(mercadopago_accesskeys)).map((e) => e.value);



    for await (const iterator of accessKeys) {
        try {

            const paymentPossible: PaymentResponse = (await axios.get(paymentUrl, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${iterator}`
                }
            })).data;
            console.log("Payment exists");
            return;
        } catch (error) {
            console.log("Access key with error");
        }
    }








}