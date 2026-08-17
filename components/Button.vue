<script setup lang="ts">
defineProps<{
  label: string;
  to?: string;
  href?: string;
  download?: string;
  variant?: string;
}>();
</script>

<template>
  <!-- Botón de navegación -->
  <NuxtLink
    v-if="to"
    :to="to"
    class="group relative overflow-hidden inline-flex w-full sm:w-auto justify-center px-6 py-3"
    :class="variant ? 'btn-dark' : 'btn-primary'"
  >
    <div
      class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
    ></div>

    <div class="relative overflow-hidden">
      <p
        class="whitespace-nowrap group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
        {{ label }}
      </p>

      <p
        class="absolute top-7 left-0 whitespace-nowrap group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
        {{ label }}
      </p>
    </div>
  </NuxtLink>

  <!-- Botón de descarga/enlace -->
  <a
    v-else-if="href"
    :href="href"
    :download="download"
    class="group relative overflow-hidden inline-flex w-full sm:w-auto justify-center px-6 py-3"
    :class="variant ? 'btn-dark' : 'btn-primary'"
  >
    <div
      class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
    ></div>

    <div class="relative overflow-hidden">
      <p
        class="whitespace-nowrap group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
        {{ label }}
      </p>

      <p
        class="absolute top-7 left-0 whitespace-nowrap group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
        {{ label }}
      </p>
    </div>
  </a>
</template>