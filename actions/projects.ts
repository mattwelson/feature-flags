"use server";
import db from "@/lib/db/drizzle";

export async function getProjects() {
  const data = await db.query.projects.findMany({
    with: {
      flags: true,
    },
  });
  return data;
}
