import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { courses } from "./course";
import { users } from "./users";
import { createInsertSchema } from "drizzle-zod";

export const certifications = pgTable("certifications", {
    id: uuid('id').defaultRandom().defaultRandom(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    user_id: text("id").notNull(),
    course_id: uuid('course_id').notNull()
})

export const certifications_relation = relations(certifications, ({one}) => ({
    course: one(courses, {
        fields: [certifications.course_id],
        references: [courses.id]
    }),
    user: one(users, {
        fields: [certifications.id],
        references: [users.id]
    }),
    
}))

export const certificationInsertZod = createInsertSchema(certifications)