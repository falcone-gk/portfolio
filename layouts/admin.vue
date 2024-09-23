<template>
  <div class="min-h-screen flex">
    <NuxtLoadingIndicator />
    <CommonAdminSidebar class="hidden md:block" />
    <div class="flex w-full">
      <slot />
    </div>
  </div>
</template>
