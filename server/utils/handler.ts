import type { ZodSchema } from "zod";
import type { EventHandler, EventHandlerRequest } from "h3";

export const defineValidatedHandler = <T extends EventHandlerRequest, D>(
  schema: ZodSchema,
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      // Read and validate the request body against the schema
      const body = await readValidatedBody(event, schema.safeParse);

      if (!body.success) {
        throw createError({
          status: 400,
          statusMessage: "Validation Error",
          message: JSON.stringify(body.error.issues),
          data: body.error.issues,
        });
      }

      // Pass the validated data to the handler
      return await handler(event);
    } catch (err) {
      // Error handling
      return err;
    }
  });
