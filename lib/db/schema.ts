import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { integer, text, boolean, pgTable, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const flags = pgTable("flags", {
  id: uuid("id").primaryKey().defaultRandom(),
  description: text("description").notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  enabled: boolean("enabled").default(true).notNull(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull(),
  archived: boolean("archived").default(false).notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
});

export const flagRelations = relations(flags, ({ one }) => ({
  project: one(projects, {
    fields: [flags.projectId],
    references: [projects.id],
  }),
}));

export const projectRelations = relations(projects, ({ many }) => ({
  flags: many(flags),
}));

export type Project = InferSelectModel<typeof projects>;
export type Flag = InferSelectModel<typeof flags>;
export type ProjectWithFlags = Project & { flags: Flag[] };

export type NewFlag = InferInsertModel<typeof flags>;

export const newFlagSchema = createInsertSchema(flags, {
  name: (s) =>
    s.name
      .min(2)
      .max(50)
      .regex(
        /.*\..*/,
        "Name should contain a namespace then a unique identifier"
      ),
});
