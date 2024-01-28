import { Option } from "@/lib/actions/questionary_actionst";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Check, Trash, XCircle } from "lucide-react";
import React from "react";

interface OptionContainerProps {
  option: Option;
  isAdmin: boolean;
  onClick: (questionId: string) => void;
  currentQuestionSelected: string;
  onDeleteOption: (questionId: string, option: Option) => void;
}

const OptionContainer: React.FC<OptionContainerProps> = ({
  onClick,
  option,
  currentQuestionSelected,
  onDeleteOption,
  isAdmin = false,
}) => {
  const selected: boolean = currentQuestionSelected == option.id;

  return (
    <div className="flex my-4 items-center" key={option.id}>
      <div
        onClick={() => {
          if (currentQuestionSelected == "" || isAdmin) {
            onClick(option.id);
          }
        }}
        className={cn(
          "flex-1 justify-between flex font-semibold px-6 py-3 cursor-pointer rounded-full transition-all hover:scale-[1.02] shadow-lg",
          selected
            ? option.isCorrect
              ? "bg-green-600"
              : "bg-red-600"
            : "bg-neutral-800 "
        )}
      >
        <h2>{option.title}</h2>
        {selected && (option.isCorrect ? <Check /> : <XCircle />)}
      </div>
      {isAdmin && (
        <Button
          className="ml-2 "
          variant="bordered"
          isIconOnly
          onClick={() => {
            onDeleteOption(option.question_id, option);
          }}
        >
          <Trash />
        </Button>
      )}
    </div>
  );
};

export default OptionContainer;
