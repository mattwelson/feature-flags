"use server";
import db from "@/lib/db/drizzle";
import { NewFlag, flags } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getFlags() {
  const data = await db.select().from(flags);
  return data;
}

export async function createFlag(flag: NewFlag) {
  await db.insert(flags).values(flag);

  revalidatePath("/");
}

export async function updateFlag(flag: NewFlag) {
  await db.update(flags).set(flag).where(eq(flags.id, flag.id!));

  revalidatePath("/");
}

export async function archiveFlag(flag: NewFlag) {
  await db.update(flags).set({ archived: true }).where(eq(flags.id, flag.id!));

  revalidatePath("/");
}
