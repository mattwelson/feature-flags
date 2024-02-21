"use server";
import db from "@/lib/db/drizzle";
import { flags } from "@/lib/db/schema";

export async function getFlags() {
  const data = await db.select().from(flags);
  return data;
}
