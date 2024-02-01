import { cn } from "@/lib/utils";

interface DescriptionItemI {
  title: string;
  description: string;
  orientation?: "left" | "right";
}

const DescriptionItem = ({
  description,
  title,
  orientation = "left",
}: DescriptionItemI) => {
  return (
    <div className="h-[381px] w-[451px] flex-col p-8 main-content rounded-2xl mx-6 my-4">
      <h1 className="text-2xl font-extrabold tracking-wide">
        {title.toUpperCase()}
      </h1>
      <p className="mt-6">{description}</p>
    </div>
  );
};

export default DescriptionItem;
