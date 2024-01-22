"use client";
import { EventDB } from "@/lib/actions/get_events";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const EventContainer = (event: EventDB) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/eventos/${event.id}`);
      }}
      className="mx-auto max-w-[600px] p-2 my-6 hover:bg-neutral-950 cursor-pointer transition-colors rounded-xl text-center"
    >
      <div className="aspect-[18/9] relative   rounded-xl overflow-hidden">
        <Image
          src={event.img_url}
          className="object-cover"
          fill={true}
          alt={event.title}
        />
      </div>
      <h1 className="mt-3 text-2xl font-bold">{event.title}</h1>
      <p className="mt-2  text-neutral-400 text-sm cutoff-text">
        {event.content}
      </p>
    </div>
  );
};

export default EventContainer;
