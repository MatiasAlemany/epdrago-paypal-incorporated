import { ModuleEnums, ModuleInsert, ModuleZod } from "@/lib/db/schema/modules_items";

async function crearModuleItem(form: FormData) {
    "use server";

    const newModule: ModuleInsert = {
        pdf_url: form.get("pdf_url") as string,
        type: form.get("module_type") as ModuleEnums, module_id: form.get("module_id") as string,
        position: +(form.get('position') as string),
        title: form.get('title') as string,

    }
}
