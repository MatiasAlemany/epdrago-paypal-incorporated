import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";
import EventModal from "./EventModal";
import { getEvents } from "@/lib/actions/get_events";
import EventContainer from "@/components/events/EventContainer";
import { Button } from "@nextui-org/react";
import { DeleteIcon, Trash } from "lucide-react";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { news } from "@/lib/db/schema/news";
import { revalidatePath } from "next/cache";

export default async function EventsCreatePage({}) {
  const events = await getEvents();

  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <EventModal />
      <div className="">
        {events.map((e) => (
          <div key={e.id} className="">
            <EventContainer key={e.id} {...e} />
            <form
              action={async () => {
                "use server";
                await db.delete(news).where(eq(news.id, e.id));
                revalidatePath("/crearEventos");
              }}
            >
              <div className="flex justify-center">
                <Button type="submit" isIconOnly className="mx-auto w-20">
                  <Trash />
                </Button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
