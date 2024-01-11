import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { usersToCourses } from "./users_to_courses";
import { testimonials } from './testimonials';
import { payment_schema } from "./payment";
import { modules } from "./modules";
import { course_progress } from "./course_progress";

export const courses = pgTable('courses', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    price: integer('price').default(0).notNull(),
    public: boolean('public').default(false).notNull(),
    introductory_video: text('introductory_video'),
})


export const courses_relations = relations(courses, ({ many }) => ({
    users_to_courses: many(usersToCourses),
    testimonials: many(testimonials),
    modules: many(modules),
    payments: many(payment_schema),
    course_progress: many(course_progress)

}))
