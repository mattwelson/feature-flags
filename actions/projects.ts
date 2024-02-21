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

export async function getProject(id: string) {
  const data = await db.query.projects.findFirst({
    where: (p, { eq }) => eq(p.id, id),
    with: {
      flags: true,
    },
  });
  return data;
}
