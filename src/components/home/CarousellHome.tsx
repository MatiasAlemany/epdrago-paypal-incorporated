"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const CarousellHome = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} className="mx-8">
      <CarouselContent>
        <CarouselItem>
          <div className=" bg-neutral-900 aspect-[18/6] relative rounded-lg" />
        </CarouselItem>
        <CarouselItem>
          <div className=" bg-neutral-900 aspect-[18/6] relative rounded-lg" />
        </CarouselItem>{" "}
        <CarouselItem>
          <div className=" bg-neutral-900 aspect-[18/6] relative rounded-lg" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarousellHome;
