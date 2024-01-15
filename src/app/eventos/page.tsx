import { padding } from "@/components/styles/padding";
import { getEvents } from "@/lib/actions/get_events";
import { cn } from "@/lib/utils";

const EventosPage = async () => {
  const events = await getEvents();
  return <div className={cn("min-h-screen pt-40", padding)}>EventosPage</div>;
};

export default EventosPage;
