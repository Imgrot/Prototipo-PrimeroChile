<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { NAV_ITEMS, PRIMARY_CTA } from '@/constants/navigation'
import AccessibilityToolbar from './AccessibilityToolbar.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const isDesktop = ref(false)

let mediaQuery = null

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const openDesktopMenu = () => {
  if (isDesktop.value) {
    isMenuOpen.value = true
  }
}

const closeDesktopMenu = () => {
  if (isDesktop.value) {
    closeMenu()
  }
}

const updateViewportMode = () => {
  isDesktop.value = mediaQuery?.matches ?? false
}

watch(
  () => route.fullPath,
  () => closeMenu(),
)

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 992px)')
  updateViewportMode()
  mediaQuery.addEventListener('change', updateViewportMode)
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateViewportMode)
})
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': isMenuOpen }" @mouseenter="openDesktopMenu"
    @mouseleave="closeDesktopMenu">
    <div v-if="isMenuOpen" class="site-header-backdrop" aria-hidden="true" @click="closeMenu"></div>

    <nav class="navbar pc-header-navbar">
      <div class="container pc-header-container">
        <RouterLink class="navbar-brand pc-brand-link" to="/" @click="closeMenu">
          <span class="site-brand">
            <img src="/assets/img/logo-pc.jpg" alt="PrimeroChile" />
            <span class="site-brand-text">
              <span class="d-block site-brand-title">PrimeroChile</span>
              <span class="d-block site-brand-subtitle">Guía turística clara, visual y fácil de recorrer</span>
            </span>
          </span>
        </RouterLink>

        <div class="pc-header-actions">
          <AccessibilityToolbar />

          <button class="pc-menu-toggle" type="button" aria-controls="mainNav" :aria-expanded="isMenuOpen"
            aria-label="Abrir navegación principal" @click="toggleMenu">
            <i :class="isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
            <span>Menú</span>
          </button>
        </div>
      </div>
    </nav>

    <Transition name="pc-header-panel">
      <div v-if="isMenuOpen" id="mainNav" class="pc-header-panel">
        <div class="container">
          <div class="pc-header-panel-card">
            <div class="pc-header-panel-title">
              <span>Navegación principal</span>
              <small>Elige una sección para recorrer PrimeroChile</small>
            </div>

            <ul class="pc-header-menu-list">
              <li v-for="item in NAV_ITEMS" :key="item.to">
                <RouterLink class="pc-header-menu-link" :to="item.to" :class="{ active: route.name == item.name }"
                  @click="closeMenu">
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>

            <RouterLink class="btn-pc-outline nav-cta pc-header-panel-cta" :to="PRIMARY_CTA.to" @click="closeMenu">
              <i :class="PRIMARY_CTA.icon"></i> {{ PRIMARY_CTA.label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
