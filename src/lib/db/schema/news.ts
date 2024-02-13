import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const news = pgTable('news ', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    img_url: text('img_url').notNull(),
<<<<<<< HEAD
    link: text("text")
=======
    link: text("link")
>>>>>>> parent of 87de9de (Romove error)
})