import { InferSelectModel, relations } from "drizzle-orm";
import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { usersToCourses } from "./users_to_courses";
import { testimonials } from './testimonials';
import { payment_schema } from "./payment";
import { modules } from "./modules";
import { course_progress } from "./course_progress";
import { certifications } from './certifications';
import { instructors } from './instructors';
import { exams } from "./exams";
import { frequentlyAskedQuestions } from './frequently_questions';

export const courses = pgTable('courses', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    price: integer('price').default(0).notNull(),
    is_public: boolean('public').default(false).notNull(),
    introductory_video: text('introductory_video'),
    beneficios: text('beneficios').default("").notNull(),
    descripcion: text('descripcion').default("").notNull(),
    duracion: text('duracion').default("").notNull(),
    img_url: text("img_url"),
    exam_id: uuid("exam_id")

})


export const courses_relations = relations(courses, ({ many, one }) => ({
    users_to_courses: many(usersToCourses),
    testimonials: many(testimonials),
    modules: many(modules),
    payments: many(payment_schema),
    course_progress: many(course_progress),
    certifications: many(certifications),
    instructors: many(instructors),
    exam: one(exams, {
        fields: [courses.exam_id],
        references: [exams.id]
    }),
    frequentlyAskedQuestions: many(frequentlyAskedQuestions)

}))


export type CourseOnly = InferSelectModel<typeof courses>