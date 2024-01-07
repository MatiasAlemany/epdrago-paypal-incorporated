CREATE TABLE IF NOT EXISTS "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"img_url" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "price" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "public" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "modules" ADD COLUMN "position" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "modules" ADD COLUMN "time_to_repeat_exam" integer;--> statement-breakpoint
ALTER TABLE "payment" ADD COLUMN "course_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "payment" ADD COLUMN "user_id" text NOT NULL;