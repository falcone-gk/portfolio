import type { H3Event } from "h3";
import type { infer as ZodInfer, ZodSchema } from "zod";

export const readTypeSafeData = async <
  Schema extends ZodSchema,
  Event extends H3Event = H3Event,
>(
  event: Event,
  schema: Schema,
): Promise<ZodInfer<Schema>> => {
  return await readBody(event);
};
