<template>
  <div class="flex flex-col min-h-screen">
    <CommonHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>
