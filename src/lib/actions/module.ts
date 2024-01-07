import { db } from "../db";
import { ModuleZod, modules_items } from "../db/schema/modules_items";

export async function createModule(module: ModuleZod) {
    const exam: ModuleZod = {
        type: 'examen',
        exam_id: 'examid',
        module_id: '',
        position: 0,
        time_to_repeat_exam: 20,
        title: 'Ja'
    }
    const video: ModuleZod = {
        type: 'video',
        module_id: '', position: 0,
        title: 'Ja',
        video_url: 'Yes'
    }
    db.insert(modules_items).values(exam);


    
}