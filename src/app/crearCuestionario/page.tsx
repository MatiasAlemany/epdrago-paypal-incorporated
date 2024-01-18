import { PageParams } from "@/lib/types/params";
import CrearCuestionario from "./EditQuestionary";
import { createQuestionary } from "@/lib/actions/questionary_actionst";

export default async function EditQuestionaryPage({
  searchParams: { module_id },
}: PageParams<{}, { module_id: string }>) {
  return (
    <div>
      <CrearCuestionario
        module_item_id={module_id}
        createQuestionary={async (moduleId, questions) => {
          "use server";
          await createQuestionary(module_id, questions);
          return;
        }}
      />
    </div>
  );
}
