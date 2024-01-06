import { relations } from "drizzle-orm";
import { decimal, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./course";

export const testimonials = pgTable('testimonials', {
    id: uuid('id').defaultRandom().primaryKey(),
    rating: decimal('rating').notNull(),
    course_id: uuid('id').notNull(),
    user_id: text('user_id').notNull()
})

export const testimonials_relation = relations(testimonials, ({ one }) => ({
    user: one(users, {
        fields: [testimonials.user_id],
        references: [users.id]
    }),
    course: one(courses, {
        fields: [testimonials.course_id],
        references: [courses.id]
    })
}))