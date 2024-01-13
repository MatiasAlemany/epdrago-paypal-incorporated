ALTER TABLE "modules_items" ADD COLUMN "frase" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;