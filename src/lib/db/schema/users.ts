import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { testimonials } from './testimonials';
import { usersToCourses } from "./users_to_courses";
import { payment_schema } from "./payment";
import { course_progress } from './course_progress';
import { certifications } from './certifications';
import z from 'zod';

const zodRoles = z.enum(['user', 'admin']);
const roles = zodRoles.options;
type Role = z.infer<typeof zodRoles>;

export const users = pgTable("users", {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    img_url: text('img_url'),
    role: text('role', { enum: roles }).default('user').notNull()
})

export const users_relations = relations(users, ({ many }) => ({
    testimonials: many(testimonials),
    users_to_courses: many(usersToCourses),
    payments: many(payment_schema),
    course_progress: many(course_progress),
    certifications: many(certifications)
}))