"use server"
import { action } from './safe_action'
import z from 'zod';

export const verifyCertificate = action(z.object({
    id: z.string()
}), async ({ id }) => {
    console.log(id)
    await delay(4000);
})


async function delay(milliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('');
        }, milliseconds);
    });
}