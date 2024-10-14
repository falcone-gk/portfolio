<template>
  <UCard
    :ui="{
      base: 'mx-auto max-w-[400px] md:min-w-[350px]',
    }"
  >
    <UForm
      ref="form"
      :schema="loginSchema"
      :state="state"
      class="flex flex-col gap-4"
      @submit="submitLogin"
    >
      <UFormGroup label="Username" name="username" required>
        <UInput
          v-model="state.username"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>
      <UFormGroup label="Contraseña" name="password" required>
        <UInput
          v-model="state.password"
          placeholder="************"
          type="password"
          icon="i-heroicons-lock-closed-20-solid"
        />
      </UFormGroup>
      <UButton type="submit" :loading="status === 'pending'" block>
        Login
      </UButton
      >
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import type { Form } from "#ui/types"
import { loginSchema } from "~/schemas";
import type { z } from "zod";

definePageMeta({
  layout: "centered",
});

type LoginSchemaType = z.infer<typeof loginSchema>
const form = ref<Form<LoginSchemaType>>();
const state = reactive<LoginSchemaType>({
  username: "",
  password: "",
});

const { data, status, execute } = useLazyFetch("/api/auth/login", {
  method: "POST",
  immediate: false,
  watch: false,
  body: state,
});

const { fetch } = useUserSession();
const route = useRoute();
const submitLogin = async () => {
  await execute();

  if (data.value) {
    const nextPage = route.query.next ? route.query.next : "/admin";
    await fetch();
    navigateTo(nextPage as string, { replace: true });
  } else {
    form.value?.setErrors([
      {
        message: "Wrong credentials.",
        path: "password",
      },
    ]);
  }
};
</script>
