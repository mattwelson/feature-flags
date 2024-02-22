"use server";
import db from "@/lib/db/drizzle";
import { flags, projects } from "@/lib/db/schema";
import { count } from "drizzle-orm";

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

export async function getStats() {
  const [{ value: numberOfProjects }] = await db
    .select({ value: count() })
    .from(projects);
  const [{ value: numberOfFlags }] = await db
    .select({ value: count() })
    .from(flags);
  console.log({ numberOfFlags });
  return [
    { title: "Projects", value: numberOfProjects },
    { title: "Flags", value: numberOfFlags },
  ];
}
