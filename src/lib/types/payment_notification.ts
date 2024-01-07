import z from 'zod'

export const paymentNotification = z.object({
    action: z.string(),
    api_version: z.string(),
    data: z.object({
        id: z.string()
    },
    ),
    date_created: z.string(),
    id: z.number(),
    live_mode: z.boolean(),
    type: z.string(),
    user_id: z.string()
})

export type PaymentNotification = z.infer<typeof paymentNotification>;
