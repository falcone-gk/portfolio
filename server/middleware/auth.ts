export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");

  if (!token) {
    event.context.user = undefined;
  } else {
    const session = await useSession(event, {
      name: "session",
      password: token,
      cookie: {
        sameSite: "strict",
      },
    });
    event.context.user = session.data;
  }
});
