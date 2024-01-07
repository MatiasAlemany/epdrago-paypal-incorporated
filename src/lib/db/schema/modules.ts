import { relations } from "drizzle-orm";
import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import z from 'zod';
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { ExtractModified } from "@/lib/types/extract_modified";

const moduleType = z.enum(['examen', 'questionario', 'pdf', 'video'])
export type ModuleEnums = z.infer<typeof moduleType>;

export const modules = pgTable('modules', {
    id: uuid('id').defaultRandom().primaryKey(),
    position: integer('position').notNull(),
    title: text('title').notNull(),
    type: text('type', { enum: moduleType.options }).notNull().$type<ModuleEnums>(),
    course_id: uuid('course_id').notNull().references(() => courses.id),
    pdf_url: text('pdf_url'),
    video_url: text('video_url'),
    exam_id: text('exam_id'),
    questionary_id: text('questionary_id'),
    time_to_repeat_exam: integer('time_to_repeat_exam')

})


export const modulesRelations = relations(modules, ({ one }) => ({
    course: one(courses, {
        fields: [modules.course_id],
        references: [courses.id]
    })
}))

const moduleInsert = createInsertSchema(modules);
const moduleZod = createSelectSchema(modules)

type ModuleInsert = z.infer<typeof moduleInsert>;
const module_properties = moduleZod.pick({ position: true, course_id: true, title: true });

const module_pdf = moduleZod
    .pick({ pdf_url: true, })
    .merge(z.object({ type: z.literal(moduleType.enum.pdf) }))

const module_exam = moduleZod.pick({ exam_id: true, time_to_repeat_exam: true, }).merge(z.object({ type: z.literal(moduleType.enum.examen) }))
const module_video = moduleZod.pick({ video_url: true, }).merge(z.object({ type: z.literal(moduleType.enum.video) }))
const module_questionary = moduleZod.pick({ questionary_id: true })
    .merge(z.object({ type: z.literal(moduleType.enum.questionario) }))


const module_discriminated_union = z.discriminatedUnion('type', [module_pdf, module_exam, module_video, module_questionary]);
export const moduleZodIntersecttion = z.intersection(module_discriminated_union, module_properties);

export type ModuleZod = z.infer<typeof moduleZodIntersecttion>;
export type ModuleExamType = ExtractModified<ModuleZod, 'type', 'examen'>;
export type ModuleVideoType = ExtractModified<ModuleZod, 'type', 'video'>


// const newModule: ModuleInsert = { course_id: '', id: '', position: 1, title: 'Curso', type: 'pdf' };


// const parsedModule = moduleZodIntersecttion.parse(newModule);

// if (parsedModule.type == 'pdf') {

// }

