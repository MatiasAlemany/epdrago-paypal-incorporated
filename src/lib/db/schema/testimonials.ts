import { relations } from "drizzle-orm";
import { decimal, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./course";
import { createSelectSchema } from "drizzle-zod";
import z from 'zod';

export const testimonials = pgTable('testimonials', {
    id: uuid('id').defaultRandom().primaryKey(),
    rating: decimal('rating').notNull(),
    course_id: uuid('course_id').notNull(),
    user_id: text('user_id').notNull(),
    content: text("content").default("").notNull()
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

const selectTestimonial = createSelectSchema(testimonials);
export type TestimonialSelect = z.infer<typeof selectTestimonial>
