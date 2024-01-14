import { ModuleItemInsert } from "@/lib/db/schema/modules_items";
import {
  BookCheck,
  FileText,
  FileTextIcon,
  PlayCircleIcon,
} from "lucide-react";
import React from "react";

const ModuleItemContainer = ({
  module_item,
  index,
  module_index,
}: {
  module_item: ModuleItemInsert;
  index: number;
  module_index: number;
}) => {
  return (
    <div className="flex py-2 px-4 my-2 bg-neutral-900 rounded-xl justify-between items-center">
      {module_index}.{index} {module_item.title}
      {module_item.type == "video" ? (
        <PlayCircleIcon className="text-green-500" />
      ) : module_item.type == "pdf" ? (
        <FileTextIcon className="text-green-500" />
      ) : (
        <BookCheck className="text-green-500" />
      )}
    </div>
  );
};

export default ModuleItemContainer;
