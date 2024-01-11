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
        "flex flex-col my-4 mt-16",
        orientation == "left" ? "items-start" : "items-end"
      )}
    >
      <h1 className=" font-black text-xl tracking-wide text-green-500">
        {title.toUpperCase()}
      </h1>
      <p
        className={cn(
          "text-neutral-300 max-w-[500px] mt-4",
          orientation == "left" ? "items-start" : "text-end"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default DescriptionItem;
