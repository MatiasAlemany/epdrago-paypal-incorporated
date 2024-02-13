CREATE TABLE IF NOT EXISTS "certifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"user_id" text NOT NULL,
	"course_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"price" integer DEFAULT 0 NOT NULL,
	"public" boolean DEFAULT false NOT NULL,
	"introductory_video" text,
	"beneficios" text DEFAULT '' NOT NULL,
	"descripcion" text DEFAULT '' NOT NULL,
	"duracion" text DEFAULT '' NOT NULL,
	"img_url" text,
	"exam_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "course_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"course_id" uuid NOT NULL,
	"module_id" text NOT NULL,
	"module_number" smallint DEFAULT 0 NOT NULL,
	"isFinished" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "exams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"last_time_done" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"question_id" uuid NOT NULL,
	"title" text NOT NULL,
	"isCorrect" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "questionary" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"module_item_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"exam_id" uuid,
	"title" text NOT NULL,
	"questionary_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "frequently_asked_questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"question" text NOT NULL,
	"response" text NOT NULL,
	"course_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "instructors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"instagram" text NOT NULL,
	"qualities" text NOT NULL,
	"img_url" text NOT NULL,
	"course_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "modules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text" text NOT NULL,
	"course_id" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "modules_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"position" integer NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	" module_id" uuid NOT NULL,
	"pdf_url" text,
	"video_url" text,
	"questionary_id" text,
	"frase" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "news " (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"img_url" text NOT NULL,
	"link" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment_schema" (
	"id" bigint PRIMARY KEY NOT NULL,
	"item_title" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"net_amount" integer NOT NULL,
	"payer_name" text,
	"payer_email" text,
	"course_id" uuid NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testimonials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"rating" numeric NOT NULL,
	"course_id" uuid NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"img_url" text,
	"role" text DEFAULT 'user' NOT NULL,
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usersToCourses" (
	"user_id" text NOT NULL,
	"course_id" uuid NOT NULL,
	CONSTRAINT "usersToCourses_user_id_course_id_pk" PRIMARY KEY("user_id","course_id")
);
