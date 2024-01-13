ALTER TABLE "courses" ALTER COLUMN "beneficios" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "descripcion" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "instructors" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "instructors" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "instructors" ADD COLUMN "course_id" uuid NOT NULL;