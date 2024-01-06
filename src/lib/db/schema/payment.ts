import { relations } from "drizzle-orm"
import { bigint, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const payment = pgTable("payment", {
    id: bigint("id", { mode: 'number' }).primaryKey(),
    item_title: text('item_title').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    net_amount: integer('net_amount').notNull(),
    payerName: text('payer_name'),
    payer_email: text("payer_email"),

})

export const payment_relation = relations(payment, ({many}) => ({}))