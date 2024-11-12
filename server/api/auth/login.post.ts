import { loginSchema } from "~/schemas";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Invalid request body",
      message: JSON.stringify(body.error.issues),
      data: body.error.issues,
    });
  }

  const { username, password } = body.data;
  const config = useRuntimeConfig();
  const adminUsername = config.basicAuth.username;
  const adminPassword = config.basicAuth.password;

  const isPasswordCorrect = await verifyPassword(password, adminPassword);
  if (!isPasswordCorrect || username !== adminUsername) {
    throw createError({ statusCode: 401, message: "Invalid username or password" });
  }

  const publicUserData = {
    username: username,
    isAdmin: true,
  };
  await createUserSession(event, publicUserData);

  return {
    status: "success",
    data: publicUserData,
  };
});
