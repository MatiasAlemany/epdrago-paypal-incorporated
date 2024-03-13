import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import styles from "./course.module.css";
import { cn } from "../../lib/utils";
import { TestimonialSelect } from "@/lib/db/schema/testimonials";
import { TestimonialSelectWithCourse } from "@/lib/actions/get_courses";
import { Avatar } from "@nextui-org/react";
interface TestimonialProps {
  testimonial: TestimonialSelectWithCourse;
}

const Testimonials: React.FC<TestimonialProps> = ({ testimonial }) => {
  console.log(testimonial.user);
  return (
    <div
      className={cn(
        "rounded-lg bg-container p-4 bg-neutral-950 mx-2",
        styles.testimonials
      )}
    >
      <div className="flex ">
        <div className="  overflow-hidden rounded-full">
          {testimonial.user.img_url == null ? (
            <Avatar name={testimonial.user.name} />
          ) : (
            <Avatar src={testimonial.user.img_url} />
          )}
        </div>
        <div className="flex flex-col  ml-3 ">
          <h1 className=" text-lg  font-bold ">{testimonial.user.name}</h1>
          <Rating
            initialValue={+testimonial.rating}
            readonly={true}
            size="small"
            showValue={true}
          />
        </div>
      </div>
      <h1 className="mt-3 text-sm text-neutral-300">{testimonial.content}</h1>
    </div>
  );
};

export default Testimonials;
