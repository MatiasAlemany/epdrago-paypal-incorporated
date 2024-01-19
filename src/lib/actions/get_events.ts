"use server";

import { db } from "../db";
import { news } from "../db/schema/news";


export type Events = AwaitedReturn<typeof getEvents>
export type EventDB = Events[number];
export async function getEvents() {
    const events = await db.select().from(news);
    return events;
  }
  
export async function createEvent(form: FormData) {
  const img = form.get('img_url')
  const title = form.get('title')
  const content = form.get('content')
}
