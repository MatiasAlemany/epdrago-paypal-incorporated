ALTER TABLE "usersToCourses" DROP CONSTRAINT "usersToCourses_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "news " ADD COLUMN "link" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToCourses" ADD CONSTRAINT "usersToCourses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
