<template>
  <div class="flex flex-col min-h-screen">
    <CommonHeader />
    <UContainer>
      <main class="flex-grow">
        <slot />
      </main>
    </UContainer>
    <CommonFooter />
  </div>
</template>
