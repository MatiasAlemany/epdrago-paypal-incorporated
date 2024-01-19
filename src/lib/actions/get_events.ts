"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { news } from "../db/schema/news";


export type Events = AwaitedReturn<typeof getEvents>
export type EventDB = Events[number];
export async function getEvents() {
  const events = await db.select().from(news);
  return events;
}

export async function createEvent(form: FormData) {
  const img = form.get('img_url') as string
  const title = form.get('title') as string
  const content = form.get('content') as string

  await db.insert(news).values({
    content, title, img_url: img,

  })
  revalidatePath('/eventos')
}
