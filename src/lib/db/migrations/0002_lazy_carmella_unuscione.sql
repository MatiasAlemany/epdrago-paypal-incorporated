CREATE TABLE IF NOT EXISTS "certifications" (
	"id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"course_id" uuid NOT NULL
);
