import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

const moduleTypes = ['video', 'examen', 'cuestionario', "pdf"] as const;
export type ModuleEnums = typeof moduleTypes[number];

export const modules = pgTable('modules', {
    id: uuid('id').primaryKey(),
    title: text('title').notNull(),
    type: text('type', {enum: moduleTypes}).notNull(),
    course_id: uuid('course_id').notNull(),
    pdf_url: text('pdf_url'),
    video_url: text('video_url'),
    exam_id: text('exam_id'),
    questionary_id: text('questionary_id')

})


export const modulesRelations = relations(modules, ({one}) => ({}))