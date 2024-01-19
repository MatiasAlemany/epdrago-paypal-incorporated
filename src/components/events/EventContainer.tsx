import { EventDB } from "@/lib/actions/get_events";
import Image from "next/image";
import React from "react";

const EventContainer = (event: EventDB) => {
  return (
    <div className="mx-auto max-w-[600px] p-2 hover:bg-neutral-950 cursor-pointer transition-colors rounded-xl text-center">
      <div className="aspect-[18/9] relative   rounded-xl overflow-hidden">
        <Image
          src={event.img_url}
          className="object-cover"
          fill={true}
          alt={event.title}
        />
      </div>
      <h1 className="mt-3 text-2xl font-bold">{event.title}</h1>
      <p className="mt-2 text-neutral-400 text-sm">{event.content}</p>
    </div>
  );
};

export default EventContainer;
