import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { usersToCourses } from "./users_to_courses";
import { testimonials } from './testimonials';

export const courses = pgTable('courses', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    price: integer('price').notNull(),
    public: boolean('public').default(false).notNull(),
    introductory_video: text('introductory_video'),
})


export const courses_relations = relations(courses, ({ many }) => ({
    users_to_courses: many(usersToCourses),
    testimonials: many(testimonials)
}))
