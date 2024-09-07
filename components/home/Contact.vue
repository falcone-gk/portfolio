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
        <UFormGroup label="Email" name="email" type="email" required>
          <UInput v-model="state.email" color="gray" />
        </UFormGroup>
        <UFormGroup label="Message" name="message" required>
          <UTextarea v-model="state.message" color="gray" />
        </UFormGroup>
      </div>
      <UButton type="submit" class="mt-4" label="Enviar mensaje"></UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

const form = ref<HTMLFormElement>();
const state = reactive({
  email: "",
  message: "",
});
const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
});
const onSubmit = () => {
  console.log("hola");
};
</script>
