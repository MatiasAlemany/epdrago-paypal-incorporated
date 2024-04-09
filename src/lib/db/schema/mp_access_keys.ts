import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const mercadopago_accesskeys = pgTable("mp_access_keys", {
    value: text("value").notNull().primaryKey()
})


