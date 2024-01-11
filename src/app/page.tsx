import CarousellHome from "@/components/home/CarousellHome";
import DescriptionContainer from "@/components/home/DescriptionContainer";
import FeaturesContainer from "@/components/home/FeaturesContainer";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("pt-36 flex flex-col px-20", padding)}>
      <CarousellHome />
      <FeaturesContainer />
      <DescriptionContainer />
    </div>
  );
}
