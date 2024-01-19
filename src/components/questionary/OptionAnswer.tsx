import { Option } from "@/lib/actions/questionary_actionst";
import { Check, CheckCheck, XCircle } from "lucide-react";
import React from "react";

interface OptionAnswerProps {
  option: Option | undefined;
}

const OptionAnswer: React.FC<OptionAnswerProps> = ({ option }) => {
  return (
    <div className="flex my-1">
      <div className="mr-2">
        {option == undefined || !option.isCorrect ? (
          <XCircle className="text-red-500" />
        ) : (
          <CheckCheck className="text-green-400" />
        )}
      </div>

      {option == undefined ? (
        <p>No elegiste respuesta!</p>
      ) : (
        <h1>{option.title}</h1>
      )}
      {!(option == undefined) && (
        <span className="ml-2 font-semibold text-neutral-600">
          {"(Respuesa elegida)"}
        </span>
      )}
    </div>
  );
};

export default OptionAnswer;
