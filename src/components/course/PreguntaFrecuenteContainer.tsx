import { FrequentlyAskedQuestion } from "../../lib/db/schema/frequently_questions";
const PreguntaFrecuenteContainer = ({
  item,
}: {
  item: FrequentlyAskedQuestion;
}) => {
  return (
    <div className="max-w-[600px] px-4 py-4 fade-in-view">
      <h1 className="italic text-center font-bold my-2 text-lg">
        {item.question}
      </h1>
      <p className="text-center text-neutral-300">{item.response}</p>
    </div>
  );
};

export default PreguntaFrecuenteContainer;
