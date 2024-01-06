CREATE TABLE IF NOT EXISTS "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"price" integer NOT NULL,
	"public" boolean DEFAULT false NOT NULL,
	"introductory_video" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "instructors" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"instagram" text NOT NULL,
	"qualities" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "modules" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	"course_id" uuid NOT NULL,
	"pdf_url" text,
	"video_url" text,
	"exam_id" text,
	"questionary_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment" (
	"id" bigint PRIMARY KEY NOT NULL,
	"item_title" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"net_amount" integer NOT NULL,
	"payer_name" text,
	"payer_email" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testimonials" (
	"id" uuid NOT NULL,
	"rating" numeric NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"img_url" text,
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usersToCourses" (
	"user_id" text NOT NULL,
	"course_id" uuid NOT NULL,
	CONSTRAINT "usersToCourses_user_id_course_id_pk" PRIMARY KEY("user_id","course_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToCourses" ADD CONSTRAINT "usersToCourses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToCourses" ADD CONSTRAINT "usersToCourses_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
