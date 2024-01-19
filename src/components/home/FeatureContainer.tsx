import { BookText } from "lucide-react";
import { ReactNode } from "react";

const FeatureContainer = ({
  icon,
  content,
  title
}: {
  icon: ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <div className="w-[250px] px-8 py-6 mt-4 rounded-xl bg-neutral-900  flex flex-col items-center mx-4">
      {icon}
      <h1 className="font-bold text-lg mt-4 ">{title}</h1>
      <h2 className="text-center text-neutral-400 mt-2 text-sm">
        
        {content}
      </h2>
    </div>
  );
};

export default FeatureContainer;
