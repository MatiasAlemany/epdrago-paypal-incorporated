import { getEvents } from "@/lib/actions/get_events";
import CarousellHome from "./CarousellHome";

export default async function CarousellData ({}) {
    const events = await getEvents();


    return <CarousellHome data={events} />
}
