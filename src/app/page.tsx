import CarousellData from "@/components/home/CarousellData";
import CarousellHome from "@/components/home/CarousellHome";
import DescriptionContainer from "@/components/home/DescriptionContainer";
import FeaturesContainer from "@/components/home/FeaturesContainer";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("pt-36 flex flex-col px-20 pb-40", padding)}>
      <CarousellData />
      <FeaturesContainer />
      <div className="flex flex-col items-center pt-20 appear-from-bottom">
        <h1 className="text-green-500 font-bold text-2xl lg:text-4xl text-center">
          ¿QUIENES SOMOS?
        </h1>
        <p className="max-w-[800px]  text-md lg:text-lg text-center pt-8 ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          I
        </p>
      </div>
      <DescriptionContainer />
    </div>
  );
}
