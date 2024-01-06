import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const instructors = pgTable('instructors', {
    id: uuid('id').defaultRandom(),
    name: text('name').notNull(),
    instagram: text('instagram').notNull(),
    qualities: text('qualities').notNull(),
    
})