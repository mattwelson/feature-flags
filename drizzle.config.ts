import type {Config} from "drizzle-kit";

export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEON_DATABASE_URL!,
  },
} satisfies Config;