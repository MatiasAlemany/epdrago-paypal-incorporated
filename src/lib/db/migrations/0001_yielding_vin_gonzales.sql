ALTER TABLE "usersToCourses" DROP CONSTRAINT "usersToCourses_payment_id_payment_schema_id_fk";
--> statement-breakpoint
ALTER TABLE "usersToCourses" DROP CONSTRAINT "usersToCourses_user_id_course_id_payment_id_pk";--> statement-breakpoint
ALTER TABLE "usersToCourses" ADD CONSTRAINT "usersToCourses_user_id_course_id_pk" PRIMARY KEY("user_id","course_id");--> statement-breakpoint
ALTER TABLE "usersToCourses" DROP COLUMN IF EXISTS "payment_id";