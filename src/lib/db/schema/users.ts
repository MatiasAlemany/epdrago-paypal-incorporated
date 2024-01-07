import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { testimonials } from './testimonials';
import { usersToCourses } from "./users_to_courses";
import { payment_schema } from "./payment";


export const users = pgTable("users", {
    id: text('id').primaryKey().unique(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    img_url: text('img_url')
})

export const users_relations = relations(users, ({ many }) => ({
    testimonials: many(testimonials),
    users_to_courses: many(usersToCourses),
payments: many(payment_schema)
}))