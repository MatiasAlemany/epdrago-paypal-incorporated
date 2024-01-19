import { relations } from "drizzle-orm";
import { boolean, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import { users } from "./users";
import { modules_items } from "./modules_items";
import z from 'zod';
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const exams = pgTable("exams", {
    id: uuid('id').defaultRandom().primaryKey(),
    course_id: uuid('course_id').notNull(),
    last_time_done: timestamp('last_time_done'),

})



export const questionary = pgTable("questionary", {
    id: uuid('id').defaultRandom().primaryKey(),
    module_item_id: uuid("module_item_id").notNull()
})

export const questionary_relations = relations(questionary, ({ one, many }) => ({

    questions: many(questions)

}))




export const exams_relations = relations(exams, ({ one, many }) => ({
    course: one(courses, {
        fields: [exams.course_id],
        references: [courses.id]
    }),

    questions: many(questions)
}))


export const questions = pgTable("questions", {
    id: uuid('id').defaultRandom().primaryKey(),
    exam_id: uuid('exam_id'),
    title: text('title').notNull(),
    questionary_id: uuid("questionary_id")


})

export const questions_relations = relations(questions, ({ one, many }) => ({
    exam: one(exams, {
        fields: [questions.exam_id],
        references: [exams.id]
    }),
    questionary: one(questionary, {
        fields: [questions.questionary_id],
        references: [questionary.id]
    }),
    options: many(options),


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

const questionaryInsert = createInsertSchema(questionary);