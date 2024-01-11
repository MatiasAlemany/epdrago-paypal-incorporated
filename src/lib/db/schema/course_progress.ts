import { relations } from "drizzle-orm";
import { pgTable, smallint, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./course";

export const course_progress = pgTable("course_progress", {
    id: uuid('id').defaultRandom().primaryKey(),
    user_id: text('user_id').notNull(),
    course_id: uuid('course_id').notNull(),
    module_id: text('module_id').notNull(),
    module_number: smallint('module_number').default(0).notNull()
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