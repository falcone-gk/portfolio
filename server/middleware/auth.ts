export default defineEventHandler(async (event) => {
  const session = await useSession(event, {
    name: "session",
    password: "$2y$10$sa7YxQ33oAv8VLaBW.O19uhbRmTC2mX8Jmuv3RCK18s51MunbH1Z2",
    cookie: {
      sameSite: "strict",
    },
  });
});
