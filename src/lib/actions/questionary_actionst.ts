import { currentUser } from '@clerk/nextjs';
import { exams, options, questionary, questions } from '../db/schema/exams';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { modules_items } from '../db/schema/modules_items';
import { courses } from '../db/schema/course';


export type Option = QuestionaryGet['questions'][number]['options'][number];

export type Options = QuestionaryGet['questions'][number]['options'];

export type QuestionGet = QuestionaryGet['questions'][number];
export type Questions = QuestionaryGet['questions'];

export type QuestionaryGet = AwaitedReturn<typeof getQuestionary>;



export async function getQuestionary(questionary_id: string) {
    const user = await currentUser();
    if (user == null) {
        throw Error("User not logged in")
    }
    const questionaryDb = await db.query.questionary.findFirst({
        where: eq(questionary.id, questionary_id), with: {
            questions: {
                with: {
                    options: true
                }
            }
        }
    })
    if (questionaryDb == undefined) {
        throw Error("Questionary not found")
    }

    return questionaryDb;

}

export async function createQuestionary(module_id: string, questionsValues: Questions) {

    const questionaryDB = await db.insert(questionary).values({ module_item_id: module_id }).returning();
    for (const question of questionsValues) {
        const questionDB = await db.insert(questions).values({ title: question.title, questionary_id: questionaryDB[0]!.id }).returning();
        for (const option of question.options) {
            await db.insert(options).values({ question_id: questionDB[0]!.id, title: option.title, isCorrect: option.isCorrect, })
        }
    }

    await db.update(modules_items).set({ questionary_id: questionaryDB[0]!.id }).where(eq(modules_items.id, module_id));

    console.log('Created Questionary')
}



export async function createExam(course_id: string, questionsValues: Questions) {

    const newExam = await db.insert(exams).values({ course_id: course_id }).returning();
    for (const question of questionsValues) {
        const questionDB = await db.insert(questions).values({ title: question.title, exam_id: newExam[0]?.id }).returning();
        for (const option of question.options) {
            await db.insert(options).values({ question_id: questionDB[0]!.id, title: option.title, isCorrect: option.isCorrect, })
        }
    }

    await db.update(courses).set({ exam_id: newExam[0]?.id }).where(eq(courses.id, course_id));

    console.log('Created Questionary')
}


