import { relations } from "drizzle-orm";
import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import z from 'zod';
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { ExtractModified } from "@/lib/types/extract_modified";
import { modules } from "./modules";

const moduleType = z.enum(['questionario', 'pdf', 'video'])
export const moduleValues = moduleType.options;
export type ModuleEnums = z.infer<typeof moduleType>;

export const modules_items = pgTable('modules_items', {
    id: uuid('id').defaultRandom().primaryKey(),
    position: integer('position').notNull(),
    title: text('title').notNull(),
    type: text('type', { enum: moduleType.options }).notNull().$type<ModuleEnums>(),
    module_id: uuid(' module_id').notNull(),
    pdf_url: text('pdf_url'),
    video_url: text('video_url'),
    exam_id: text('exam_id'),
    questionary_id: text('questionary_id'),
    time_to_repeat_exam: integer('time_to_repeat_exam'),
    frase: text('frase')

})


export const modules_items_relations = relations(modules_items, ({ one }) => ({
    module: one(modules, {
        fields: [modules_items.module_id],
        references: [modules.id]
    })
}))

const moduleInsert = createInsertSchema(modules_items);
const moduleZod = createSelectSchema(modules_items)

export type ModuleInsert = z.infer<typeof moduleInsert>;
const module_properties = moduleZod.pick({ position: true, module_id: true, title: true, });

const module_pdf = moduleZod
    .pick({ pdf_url: true, })
    .merge(z.object({ type: z.literal(moduleType.enum.pdf) }))

const module_video = moduleZod.pick({ video_url: true, }).merge(z.object({ type: z.literal(moduleType.enum.video) }))
const module_questionary = moduleZod.pick({ questionary_id: true })
    .merge(z.object({ type: z.literal(moduleType.enum.questionario) }))


const module_discriminated_union = z.discriminatedUnion('type', [module_pdf, module_video, module_questionary]);
export const moduleZodIntersecttion = z.intersection(module_discriminated_union, module_properties);

export type ModuleZod = z.infer<typeof moduleZodIntersecttion>;
export type ModuleVideoType = ExtractModified<ModuleZod, 'type', 'video'>


// const newModule: ModuleInsert = { course_id: '', id: '', position: 1, title: 'Curso', type: 'pdf' };


// const parsedModule = moduleZodIntersecttion.parse(newModule);

// if (parsedModule.type == 'pdf') {

// }

