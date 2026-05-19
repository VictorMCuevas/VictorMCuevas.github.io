<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { Motion, useScroll, useTransform } from "motion-v";

interface Props {
  containerClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
  items?: {
    id: string;
    label: string;
  }[];
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});

const timelineRef = ref<HTMLElement | null>(null);
const height = ref(0);

onMounted(async () => {
  await nextTick();
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect();
    height.value = rect.height;
  }
});

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 10%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
const heightTransform = shallowRef(useTransform(scrollYProgress, [0, 1], [0, 0]));

watch(height, (newHeight) => {
  heightTransform.value = useTransform(scrollYProgress, [0, 1], [0, newHeight]);
});
</script>

<template>
  <div class="w-full">
    <div class="pb-10">
      <h2 class="section-title !mt-0">{{ title }}</h2>
      <p class="paragraph mt-4">{{ description }}</p>
    </div>

    <div ref="timelineRef" class="relative z-0 pb-10">
      <div
        v-for="(item, index) in props.items"
        :key="item.id + index"
        class="flex justify-start pt-10 md:gap-10 md:pt-20"
      >
        <div
          class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
        >
          <div
            class="absolute left-3 flex size-10 items-center justify-center rounded-full bg-dark border border-white/10 md:left-3"
          >
            <div class="size-4 rounded-full bg-primary/30 border border-primary/50 p-2" />
          </div>
          <h3 class="hidden font-medium text-white/30 md:block md:pl-20 md:text-4xl">
            {{ item.label }}
          </h3>
        </div>
        <div class="flex-1 min-w-0">
          <slot :name="item.id" />
        </div>
      </div>

      <div
        :style="{ height: `${height}px` }"
        class="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent"
      >
        <Motion
          as="div"
          :style="{ height: heightTransform, opacity: opacityTransform }"
          class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary via-indigo-400 to-transparent"
        />
      </div>
    </div>
  </div>
</template>
