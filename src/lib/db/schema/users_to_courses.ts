import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./course";
import { relations } from "drizzle-orm";

export const usersToCourses = pgTable('usersToCourses', {
    user_id: text('user_id').references(() => users.id).notNull(),
    course_id: uuid('course_id').references(() => courses.id).notNull()
}, (t) => ({
    pk: primaryKey({ columns: [t.user_id, t.course_id] })
}))

export const usersToCourses_relations = relations(usersToCourses, ({ one }) => ({
    user: one(users, {
        fields: [usersToCourses.user_id],
        references: [users.id]
    }),
    course: one(courses, {
        fields: [usersToCourses.course_id],
        references: [courses.id]
    })
}))