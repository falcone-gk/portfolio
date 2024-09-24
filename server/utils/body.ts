import type { H3Event } from "h3";
import type { ZodSchema, infer as ZodInfer } from "zod";

export const readTypeSafeData = async <
  Schema extends ZodSchema,
  Event extends H3Event = H3Event,
>(
  event: Event,
  schema: Schema,
): Promise<ZodInfer<Schema>> => {
  const _body = await readBody(event);
  const data = _body.data;
  return data;
};
