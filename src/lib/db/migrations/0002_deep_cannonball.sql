ALTER TABLE "payment" RENAME TO "payment_schema";--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "public" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "modules" ADD CONSTRAINT "modules_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
