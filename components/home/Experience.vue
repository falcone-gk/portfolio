<template>
  <div class="timeline before:bg-gray-200">
    <ul>
      <li
        v-for="(item, index) in timelineItems"
        :key="`experience-item-${index}`"
        class="mb-20 before:shadow-[0_0_0_3px] before:bg-primary-400 before:shadow-primary-200 dark:shadow-primary-400 dark:before:bg-primary-600"
      >
        <div ref="itemsContent" :data-index="index" class="content opacity-0">
          <Typography tag="h3" variant="h3" color="gray">
            {{ item.title }}
          </Typography>
          <p>{{ item.description }}</p>
          <div
            class="flex gap-3 flex-wrap mt-2"
            :class="{ 'md:justify-end': index % 2 === 0 }"
          >
            <UiBadge
              v-for="(tool, toolIndex) in item.tools"
              :key="`tool-${index}-${toolIndex}`"
              :icon="tool.icon"
              :label="tool.name"
            />
          </div>
        </div>
        <div
          ref="itemsContent"
          :data-index="index + 1"
          class="opacity-0 time text-white bg-primary-400 shadow-[0_0_0_3px] shadow-primary-200 dark:shadow-primary-400 dark:bg-primary-600"
        >
          <Typography tag="h3" color="gray">
            {{ item.date }}
          </Typography>
        </div>
      </li>
      <div style="clear: both" />
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: timelineItems } = await useFetch("/experience");
const contentRefs = useTemplateRef<HTMLElement[]>("itemsContent");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (!target.dataset.index) return;
          const elementIndex = Number(target.dataset.index);
          if (elementIndex % 2 === 0) {
            entry.target.classList.add("show-from-left");
          } else {
            entry.target.classList.add("show-from-right");
          }
        }
      });
    },
    {
      threshold: 0.9,
    },
  );
  if (contentRefs.value) {
    contentRefs.value.map((el) => {
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
/* animation for each timeline item */
.show-from-left {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: show-from-left;
}

@keyframes show-from-left {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.show-from-right {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: show-from-right;
}

@keyframes show-from-right {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* timeline style */
.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
}
.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
}
.timeline ul {
  padding: 0;
  margin: 0;
}
.timeline ul li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}
.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}
.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}
.content {
  padding-bottom: 20px;
}
.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  right: -6px;
  border-radius: 50%;
}
.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  left: -4px;
  border-radius: 50%;
}
.timeline ul li h3 {
  padding: 0;
  margin: 0;
  font-weight: 600;
}
.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
}
.timeline ul li .time h4 {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -220px;
  margin: 0;
  padding: 8px 16px;
  border-radius: 18px;
}
.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -220px;
  margin: 0;
  padding: 8px 16px;
  border-radius: 18px;
}

/* media queries */
@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .show-from-left {
    animation-name: show-from-right;
  }
  .timeline {
    width: 100%;
    padding-bottom: 0;
  }
  h1 {
    font-size: 40px;
    text-align: center;
  }
  .timeline:before {
    left: 20px;
    height: 100%;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;
  }
  .timeline ul li:nth-child(odd):before,
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 16px;
  }
  .timeline ul li:nth-child(odd) .time,
  .timeline ul li:nth-child(even) .time {
    top: -30px;
    left: 50px;
    right: inherit;
  }
}
</style>
