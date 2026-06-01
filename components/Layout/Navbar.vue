<script setup lang="ts">
const isActive = ref(false)
const isScrolled = ref(false)
const isSideOpen = ref(false)



function navActive() {
  isActive.value = !isActive.value
}



let handleScroll: () => void

onMounted(() => {
  handleScroll = () => {
    isScrolled.value = window.scrollY > 80
    if (!isScrolled.value) isSideOpen.value = false
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Navbar horizontal (parte superior) -->
  <header
    class="fixed inset-x-0 top-0 lg:mt-10 z-50 transition-all duration-500 bg-black/40 backdrop-blur-md border-b border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent lg:max-w-[1480px] lg:px-4 lg:mx-auto"
    :class="isScrolled ? 'lg:-translate-y-28 lg:opacity-0 lg:pointer-events-none' : 'translate-y-0 opacity-100'"
  >
    <div class="max-w-[1480px] mx-auto px-4 lg:max-w-none lg:mx-0 lg:px-0 flex items-center justify-between py-3 lg:py-0">
      <img src="/images/logo.png" alt="" width="80" height="40">
      <div
        :class="isActive
          ? 'opacity-100 translate-y-1 lg:opacity-100 lg:pointer-events-auto from-black/90 to-black/80'
          : 'opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100 from-black/60 to-black/40'"
        class="absolute top-16 inset-x-4 lg:inset-0 lg:relative overflow-hidden flex flex-col lg:flex-row rounded-3xl gap-8 items-center lg:rounded-full px-7 py-8 lg:py-3 border border-white/10 bg-gradient-to-b backdrop-blur-md transition-all duration-300"
      >
        <div class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"></div>

        <NuxtLink
          class="text-white group text-xl lg:text-base"
          v-for="link in NAVLINKS"
          :key="link.url"
          :to="link.url"
          @click="isActive = false"
        >
          <div class="relative overflow-hidden">
            <p class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">{{ link.label }}</p>
            <p class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">{{ link.label }}</p>
          </div>
        </NuxtLink>

        <NuxtLink class="lg:hidden text-white group text-xl lg:text-base" to="#cta" @click="isActive = false">
          <div class="relative overflow-hidden">
            <p class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">Contacto</p>
            <p class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">Contacto</p>
          </div>
        </NuxtLink>
      </div>

      <div>
        <Button class="rounded-full hidden lg:block shadow-none" label="Contacto" to="#cta" variant="btn-dark" />
        <button @click="navActive" class="lg:hidden btn-dark px-4 py-2 rounded-full group">
          <img class="group-focus:scale-100 group-hover:scale-110 transition-all" :src="isActive ? '/svg/ic-close.svg' : '/svg/ic-hamburger.svg'">
        </button>
      </div>
    </div>
  </header>

  <!-- Navbar lateral izquierdo (solo desktop, cuando hay scroll) -->
  <div
    class="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 z-50 transition-all duration-500"
    :class="isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16 pointer-events-none'"
  >
    <div
      class="relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md overflow-hidden transition-all duration-300"
      :class="isSideOpen ? 'w-44' : 'w-24'"
      @mouseenter="isSideOpen = true"
      @mouseleave="isSideOpen = false"
    >
      <div class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full pointer-events-none"></div>

      <!-- Logo -->
      <div class="flex items-center justify-center transition-all duration-300" :class="isSideOpen ? 'py-4 px-3' : 'p-1'">
        <img src="/images/logo.png" alt="" :width="isSideOpen ? 100 : 60" height="32" class="transition-all duration-300">
      </div>

      <!-- Links desplegables -->
      <div
        class="flex flex-col gap-2 overflow-hidden transition-all duration-300 px-5"
        :class="isSideOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'"
      >
        <NuxtLink
          v-for="link in NAVLINKS"
          :key="link.url"
          :to="link.url"
          class="text-white group text-sm py-2"
        >
          <div class="relative overflow-hidden">
            <p class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">{{ link.label }}</p>
            <p class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">{{ link.label }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
