"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Events } from "@/lib/actions/get_events";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";

const CarousellHome = ({ data }: { data: Events }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const router = useRouter();
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} className="mx-8">
      <CarouselContent>
        {data.length == 0 && (
          <CarouselItem>
            <Skeleton className="aspect-[18/9] rounded-lg" />
          </CarouselItem>
        )}
        {data.map((e) => (
          <CarouselItem key={e.id}>
            <div
              onClick={() => {
                router.push(`/eventos/${e.id}`);
              }}
              className=" cursor-pointer bg-neutral-900 aspect-[18/9] relative rounded-lg overflow-hidden"
            >
              <Image
                src={e.img_url}
                className="object-cover"
                fill={true}
                alt={"Prueba"}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarousellHome;
