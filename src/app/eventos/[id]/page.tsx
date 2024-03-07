import { padding } from "@/components/styles/padding";
import { getEvent } from "@/lib/actions/get_events";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function EventosPage({
  params: { id },
}: PageParams<{ id: string }>) {
  const event = await getEvent(id);
  return (
    <div
      className={cn("min-h-screen pt-40 pb-80  flex justify-center", padding)}
    >
      <div className="max-w-[800px] w-[800px]">
        <div className="aspect-[18/9] relative   rounded-xl overflow-hidden">
          <Image
            src={event.img_url}
            className="object-cover"
            fill={true}
            alt={event.title}
          />
        </div>
        {/* <h2 className="text-neutral-500 tracking-wide mt-2">
          {event.createdAt?.toLocaleDateString()}
        </h2> */}
        <h1 className="text-3xl my-2 font-bold mt-8">{event.title}</h1>
        <p className="text-neutral-200">{event.content}</p>
        <div className="flex">
          {event.link != null && event.link != "" && (
            <div className="rounded-full hover:bg-neutral-500 cursor-pointer  px-4 py-2 mt-4 bg-neutral-700 flex">
              <Link2Icon className="mr-2" />
              <Link href={event.link}>Link</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
