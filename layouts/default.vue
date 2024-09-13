<template>
  <div class="flex flex-col min-h-screen">
    <CommonHeader />
    <UContainer>
      <main class="flex-grow">
        <slot />
      </main>
    </UContainer>
    <div class="mx-12">
      <UDivider class="mt-8" />
      <CommonFooter />
    </div>
  </div>
</template>
