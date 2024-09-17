import { loginSchema } from "~/schemas";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Bad request",
      message: "Invalid input body",
    });
  }

  const data = body.data;
  const config = useRuntimeConfig();
  const { username, password } = config.basicAuth;

  if (data.username === username && data.password === password) {
    const session = await useSession(event, {
      name: "session",
      password: password,
      cookie: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      },
      maxAge: 60 * 60 * 24,
    });

    await session.update({
      isAdmin: true,
    });

    console.log("login:", session.data);

    return {
      status: "success",
      message: "Login successful",
    };
  } else {
    throw createError({
      status: 401,
      statusMessage: "Wrong credentials",
    });
  }
});
