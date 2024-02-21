import { relations } from "drizzle-orm";
import { integer, text, boolean, pgTable, uuid } from "drizzle-orm/pg-core";

export const flags = pgTable("flags", {
  id: uuid("id").primaryKey().defaultRandom(),
  description: text("description").notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  enabled: boolean("enabled").default(true).notNull(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull(),
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
