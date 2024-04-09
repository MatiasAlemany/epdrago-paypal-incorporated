import { relations } from "drizzle-orm"
import { bigint, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { courses } from "./course"
import { createInsertSchema } from "drizzle-zod"
import z from 'zod';
import { users } from "./users";

export const payment_schema = pgTable("payment_schema", {
    id: bigint("id", { mode: 'number' }).primaryKey(),
    item_title: text('item_title').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    net_amount: integer('net_amount').notNull(),
    payerName: text('payer_name'),
    payer_email: text("payer_email"),
    course_id: uuid('course_id').notNull(),
    user_id: text('user_id').notNull()

})

export const payment_schema_relation = relations(payment_schema, ({ one }) => ({
    course: one(courses, {
        fields: [payment_schema.course_id],
        references: [courses.id]
    }),
    user: one(users, {
        fields: [payment_schema.user_id],
        references: [users.id]
    }),

}),)


const insertSchema = createInsertSchema(payment_schema);
export type InsertPayment = z.infer<typeof insertSchema>;