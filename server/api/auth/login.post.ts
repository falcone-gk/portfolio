import { loginSchema } from "~/schemas";

export default defineValidatedHandler(loginSchema, async (event) => {
  const data = await readTypeSafeData(event, loginSchema);

  const config = useRuntimeConfig(event);
  const { username, password } = config.basicAuth;

  if (data.username === username && data.password === password) {
    await setUserSession(event, {
      user: {
        login: data.username,
        // isAdmin: true,
      },
      secure: {
        apiToken: data.password,
      },
      loggedInAt: new Date(),
    });

    return {
      status: "success",
      message: "Login successful",
    };
  }
  else {
    throw createError({
      status: 401,
      statusMessage: "Wrong credentials",
    });
  }
});
