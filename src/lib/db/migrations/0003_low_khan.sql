CREATE TABLE IF NOT EXISTS "frequently_asked_questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"response" text NOT NULL,
	"course_id" uuid NOT NULL
);
