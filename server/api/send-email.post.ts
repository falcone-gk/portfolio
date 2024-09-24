import { useAsyncData } from "nuxt/app";
import { contactSchema } from "~/schemas";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Validation Error",
      message: JSON.stringify(body.error.issues),
      data: body.error.issues,
    });
  }

  const data = body.data;

  const config = useRuntimeConfig();
  const postmailToken = config.postmailToken;
  const subjectMessage = "Contact from portfolio website";
  const completeMessage = `${data.subject}\n\nEmail to contact: ${data.email}\n\nMessage:\n${data.message}`;

  let isError = false;
  await $fetch("https://postmail.invotes.com/send", {
    method: "POST",
    body: {
      subject: subjectMessage,
      text: completeMessage,
      access_token: postmailToken,
    },
  }).catch(() => {
    isError = true;
  });

  if (isError) {
    throw createError({
      status: 404,
      statusMessage: "Error Message",
      message: "It was not possible to send the message.",
    });
  }

  return {
    status: "success",
    message: "Message sent successfully",
  };
});
