<template>
  <div>
    <UForm
      id="form"
      ref="form"
      :schema="contactSchema"
      :state="state"
      @submit="onSubmit"
    >
      <div class="space-y-6">
        <UFormGroup label="Subject" name="subject" type="text" required>
          <UInput v-model="state.subject" color="gray" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" type="email" required>
          <UInput v-model="state.email" color="gray" />
        </UFormGroup>
        <UFormGroup label="Message" name="message" required>
          <UTextarea v-model="state.message" color="gray" />
        </UFormGroup>
      </div>
      <UButton
        type="submit"
        class="mt-4"
        label="Enviar mensaje"
        :loading="status === 'pending'"
      ></UButton>
    </UForm>
    <div class="mt-4">
      <p class="text-sm">
        Powered by
        <a
          class="text-primary-500"
          href="https://postmail.invotes.com"
          target="_blank"
          >PostMail</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

const form = ref<HTMLFormElement>();
const state = reactive({
  subject: "",
  email: "",
  message: "",
});
const contactSchema = z.object({
  subject: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const config = useRuntimeConfig();
const subjectMessage = "Contact from portfolio website";
const completeMessage = computed(() => {
  return `${state.subject}\n\nEmail to contact: ${state.email}\n\nMessage:\n${state.message}`;
});
const {
  data,
  status,
  execute: sendEmail,
} = useLazyAsyncData(
  "send-email",
  () =>
    $fetch("https://postmail.invotes.com/send", {
      method: "POST",
      body: {
        subject: subjectMessage,
        text: completeMessage.value,
        access_token: config.public.postmailToken,
      },
    }),
  {
    immediate: false,
  },
);

const { showNotification } = useNotification();
const onSubmit = async () => {
  await sendEmail();

  if (data.value) {
    // success event
    showNotification({
      title: "Message sent succesfully",
      message: "Your message was sent. Please wait for an answer.",
      type: "success",
    });
    state.subject = "";
    state.email = "";
    state.message = "";
  } else {
    // error notification probably because of api limit per day
    showNotification({
      title: "Error sending the message",
      message:
        "An error occurred while sending the message. Please contact me at falcone134@gmail.com.",
      type: "error",
    });
  }
};
</script>
