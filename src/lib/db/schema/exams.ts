import { relations } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import { users } from "./users";

export const exams = pgTable("exams", {
    id: uuid('id').defaultRandom().primaryKey(),
    course_id: uuid('course_id').notNull(),
    user_id: uuid('user_id').notNull(),
    last_time_done: timestamp('last_time_done'),

})


export const exams_relations = relations(exams, ({ one, many }) => ({
    course: one(courses, {
        fields: [exams.course_id],
        references: [courses.id]
    }),
    user: one(users, {
        fields: [exams.user_id],
        references: [users.id]
    }),
    many: many(questions)
}))


export const questions = pgTable("questions", {
    id: uuid('id').defaultRandom().primaryKey(),
    exam_id: uuid('exam_id').notNull(),
    title: text('title').notNull(),


})

export const questions_relations = relations(questions, ({ one, many }) => ({
    exam: one(exams, {
        fields: [questions.exam_id],
        references: [exams.id]
    }),
    many: many(options)

}))


export const options = pgTable("options", {
    id: uuid('id').defaultRandom().primaryKey(),
    question_id: uuid('question_id').notNull(),
    title: text('title').notNull(),
    isCorrect: boolean('isCorrect').default(false).notNull()
})

export const options_relations = relations(options, ({ one }) => ({
    question: one(questions, {
        fields: [options.question_id],
        references: [questions.id]
    })
}))

