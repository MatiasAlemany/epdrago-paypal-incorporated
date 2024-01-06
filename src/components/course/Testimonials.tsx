import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import styles from "./course.module.css";
import { cn } from "../../lib/utils";
interface TestimonialProps {
  content: string;
}

const Testimonials: React.FC<TestimonialProps> = ({ content }) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-container p-4 bg-neutral-950 mx-2",
        styles.testimonials
      )}
    >
      <div className="flex ">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src="/profile-image.png"
            fill={true}
            className="object-cover"
            alt="Profile image"
          />
        </div>
        <div className="flex flex-col  ml-3 ">
          <h1 className=" text-lg  font-bold ">Rodri Otrera</h1>
          <Rating
            initialValue={4.5}
            readonly={true}
            size="small"
            showValue={true}
          />
        </div>
      </div>
      <h1 className="mt-3 text-sm text-neutral-300">{content}</h1>
    </div>
  );
};

export default Testimonials;
