ALTER TABLE "course_progress" ALTER COLUMN "module_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "course_progress" ALTER COLUMN "module_number" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "course_progress" ALTER COLUMN "module_number" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "instructors" ADD COLUMN "img_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "modules" ADD COLUMN "createdAt" timestamp DEFAULT now();