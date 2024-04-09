ALTER TABLE "payment_schema" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "payment_schema" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "payment_schema" DROP COLUMN IF EXISTS "uuid";