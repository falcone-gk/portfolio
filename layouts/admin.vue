<template>
  <div class="min-h-screen flex">
    <NuxtLoadingIndicator />
    <CommonAdminSidebar />
    <div class="flex w-full">
      <slot />
    </div>
  </div>
</template>
