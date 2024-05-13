import { GridBackgroundDemo } from "@/components/GridBackground";
import Image from "next/image";

export default async function UiTestPage({}) {
  return (
    <div className="min-h-screen pt-28  ">
      <div className="">
        <GridBackgroundDemo />
        <div className="absolute  w-[900px] bottom-40 image-fade rounded-xl h-[650px] flex justify-center items-center  right-24    grayscale  md:ml-4">
          <Image
            src="/team.png"
            fill={true}
            alt="Team"
            className="object-contain image-fade absolute "
          />
        </div>
      </div>
    </div>
  );
}
