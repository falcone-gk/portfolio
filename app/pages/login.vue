<template>
  <UCard
    :ui="{
      base: 'mx-auto max-w-[400px] md:min-w-[350px]',
    }"
  >
    <UForm
      ref="login-form"
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
      <UButton type="submit" :loading="pendingAuth" block>
        Login
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import type { Form } from "#ui/types";
import type { LoginForm } from "~/types";
import { loginSchema } from "~/schemas";

definePageMeta({
  layout: "centered",
});

const form = useTemplateRef<Form<LoginForm>>("login-form");
const state = reactive<LoginForm>({
  username: "",
  password: "",
});

const { login, isLoggedIn, pendingAuth } = useAuth();
const submitLogin = async () => {
  await login(state);
  if (!isLoggedIn.value) {
    form.value?.setErrors([
      {
        message: "Wrong credentials.",
        path: "password",
      },
    ]);
  }
  else {
    navigateTo("/admin");
  }
};
</script>
