ALTER TABLE "testimonials" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "testimonials" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "testimonials" ADD COLUMN "course_id" uuid NOT NULL;