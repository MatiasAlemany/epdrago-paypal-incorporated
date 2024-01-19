import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";
import EventModal from "./EventModal";

export default async function EventsCreatePage({}) {
  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <EventModal />
    </div>
  );
}
