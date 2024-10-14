<template>
  <div>
    <UForm
      id="form"
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
        label="Send message"
        :loading="status === 'pending'"
      />
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
import { contactSchema } from "~/schemas";

const state = reactive({
  subject: "",
  email: "",
  message: "",
});

const {
  data,
  status,
  execute: sendEmail,
} = useFetch("/api/send-email", {
  method: "POST",
  immediate: false,
  watch: false,
  body: state,
});
const { showNotification } = useNotification();
const onSubmit = async () => {
  await sendEmail();

  if (data.value) {
    // success event
    showNotification({
      title: "Message sent successfully",
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
