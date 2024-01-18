import { getQuestionary } from "@/lib/actions/questionary_actionst";
import CuestionarioState from "../questionary/QuestionarioState";

export default async function ModuleQuestionary({
  questionary_id,
}: {
  questionary_id: string;
}) {
  const questionary = await getQuestionary(questionary_id);
  return (
    <>
      <CuestionarioState questions={questionary.questions} />
    </>
  );
}
