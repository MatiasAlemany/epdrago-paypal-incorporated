import { defineConfig } from "drizzle-kit"
import 'dotenv/config';

export default defineConfig(
    {
        dialect: "postgresql",
        schema: "./src/lib/db/schema/",
        out: "./src/lib/db/migrations",
        verbose: true,

        dbCredentials: {
            url: process.env.DATABASE_URL!,

        }
    });