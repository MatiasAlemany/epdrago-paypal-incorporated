import { db } from "../db";
import { ModuleZod, modules } from "../db/schema/modules";

export async function createModule(module: ModuleZod) {
    const exam: ModuleZod = {
        type: 'examen',
        exam_id: 'examid',
        course_id: '',
        position: 0,
        time_to_repeat_exam: 20,
        title: 'Ja'
    }
    const video: ModuleZod = {
        type: 'video',
        course_id: '',
        position: 0,
        title: 'Ja',
        video_url: 'Yes'
    }
    db.insert(modules).values(exam);
}