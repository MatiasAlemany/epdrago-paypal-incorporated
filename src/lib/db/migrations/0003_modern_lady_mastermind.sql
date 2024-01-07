CREATE TABLE IF NOT EXISTS "modules_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"position" integer NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	" module_id" uuid NOT NULL,
	"pdf_url" text,
	"video_url" text,
	"exam_id" text,
	"questionary_id" text,
	"time_to_repeat_exam" integer
);
--> statement-breakpoint
ALTER TABLE "modules" DROP CONSTRAINT "modules_course_id_courses_id_fk";
--> statement-breakpoint
ALTER TABLE "modules" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "modules" ALTER COLUMN "course_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "modules" ADD COLUMN "text" text NOT NULL;--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "position";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "type";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "pdf_url";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "video_url";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "exam_id";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "questionary_id";--> statement-breakpoint
ALTER TABLE "modules" DROP COLUMN IF EXISTS "time_to_repeat_exam";