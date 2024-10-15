<template>
  <div class="grid flex-grow place-items-center h-full">
    <div class="flex flex-col gap-2">
      <span class="text-center text-gray-700 dark:text-gray-200">You have to choose a post to <br>
        edit in Post List view</span>
      <UButton
        block
        variant="outline"
        label="Go to post list"
        to="/admin/posts"
      />
    </div>
  </div>
</template>
