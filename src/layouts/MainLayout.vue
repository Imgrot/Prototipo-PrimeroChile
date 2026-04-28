<script setup>
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import { usePrototypeInteractions } from '@/composables/usePrototypeInteractions'

usePrototypeInteractions()
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
