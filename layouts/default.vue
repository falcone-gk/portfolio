<template>
  <div class="flex flex-col min-h-screen">
    <CommonHeader />
    <main class="flex-grow">
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <div class="mx-12">
      <UDivider class="mt-8" />
      <CommonFooter />
    </div>
  </div>
</template>
