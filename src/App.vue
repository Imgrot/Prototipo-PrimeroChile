<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useTemaStore } from '@/stores/temaStore'

const temaStore = useTemaStore()
temaStore.inicializarTema()
</script>

<template>
  <MainLayout />
</template>
