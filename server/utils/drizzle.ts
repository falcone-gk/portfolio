import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "../database/schema";

export const tables = schema;

const config = useRuntimeConfig();
const turso = createClient({
  url: config.turso.databaseUrl!,
  authToken: config.turso.authToken,
});

export const db = drizzle(turso, { schema });

export type Post = typeof schema.post.$inferSelect;
export type Tag = typeof schema.tag.$inferSelect;
