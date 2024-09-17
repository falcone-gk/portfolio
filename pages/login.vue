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
      @submit="submitLogin"
      class="flex flex-col gap-4"
    >
      <UFormGroup label="Username o email" name="username" required>
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
      <UButton type="submit" block>Iniciar sesión</UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { loginSchema } from "~/schemas";

definePageMeta({
  layout: "centered",
});

const form = ref();
const state = reactive({
  username: "",
  password: "",
});

const { execute } = useLazyFetch("/api/auth/login", {
  method: "POST",
  immediate: false,
  watch: false,
  body: state,
});

const submitLogin = async () => {
  await execute();
};
</script>
