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

const CarousellHome = ({ data }: { data: Events }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} className="mx-8">
      <CarouselContent>
        {data.map((e) => (
          <CarouselItem key={e.id}>
            <div className=" cursor-pointer bg-neutral-900 aspect-[18/8] relative rounded-lg overflow-hidden">
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
