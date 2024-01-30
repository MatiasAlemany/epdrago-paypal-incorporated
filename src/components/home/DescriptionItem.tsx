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
    <div
      className={cn(
        "flex flex-col p-8 mt-16 fade-in-view border border-neutral-600 rounded-xl",
        orientation == "left" ? "items-start" : "items-end"
      )}
    >
      <h1 className=" font-black text-xl lg:text-2xl tracking-wide text-green-500">
        {title.toUpperCase()}
      </h1>
      <p
        className={cn(
          "text-neutral-300 max-w-[600px] mt-4 text-md lg:text-lg",
          orientation == "left" ? "items-start" : "text-end"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default DescriptionItem;
