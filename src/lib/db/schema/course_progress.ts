import { relations } from "drizzle-orm";
import { boolean, pgTable, smallint, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./course";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from 'zod';

export const course_progress = pgTable("course_progress", {
    id: uuid('id').defaultRandom().primaryKey(),
    user_id: text('user_id').notNull(),
    course_id: uuid('course_id').notNull(),
    module_id: text('module_id').notNull(),
    module_number: smallint('module_number').default(0).notNull(),
    isFinished: boolean('isFinished').notNull().default(false),
})

export const course_progress_relations = relations(course_progress, ({ one }) => ({
    user: one(users, {
        fields: [course_progress.user_id],
        references: [users.id]
    }),
    course: one(courses, {
        fields: [course_progress.course_id],
        references: [courses.id]
    })
}))


const course_progress_insert = createSelectSchema(course_progress);
const course_progress_select = createInsertSchema(course_progress)

export type CourseProgressSelect = z.infer<typeof course_progress_select> & { rating: number, courseTitle: string, moduleTitle: string, exam_id: string | null, certification_id: string | null };