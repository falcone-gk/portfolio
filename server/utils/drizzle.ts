import { drizzle } from "drizzle-orm/d1";
export { sql, eq, and, or } from "drizzle-orm";

import * as schema from "../database/schema";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}

export type Post = typeof schema.post.$inferSelect;
export type Tag = typeof schema.tag.$inferSelect;
