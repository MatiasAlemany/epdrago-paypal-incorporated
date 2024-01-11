import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import { modules_items } from "./modules_items";

export const modules = pgTable('modules', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('text').notNull(),
    course_id: uuid('course_id'),
    createdAt: timestamp('createdAt').defaultNow()
    

})

export const modules_relations = relations(modules, ({one, many}) => ({
    course: one(courses, {
        fields: [modules.course_id],
        references: [courses.id]
    }),
    items: many(modules_items)
}))