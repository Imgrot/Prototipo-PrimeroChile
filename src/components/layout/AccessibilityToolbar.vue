<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useTemaStore } from '@/stores/temaStore'

const temaStore = useTemaStore()
const isModesOpen = ref(false)
const toolbarRef = ref(null)

const toggleModes = () => {
  isModesOpen.value = !isModesOpen.value
}

const closeModes = () => {
  isModesOpen.value = false
}

const selectTheme = (theme) => {
  temaStore.cambiarTema(theme)
  closeModes()
}

const toggleColorblindMode = () => {
  temaStore.alternarDaltonismo()
  closeModes()
}

const handleDocumentClick = (event) => {
  if (!toolbarRef.value?.contains(event.target)) {
    closeModes()
  }
}

onMounted(() => {
  temaStore.inicializarTema()
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div ref="toolbarRef" class="accessibility-toolbar" aria-label="Controles de accesibilidad"
    @keydown.escape="closeModes">
    <div class="accessibility-modes">
      <button type="button" class="accessibility-mode-toggle"
        :class="{ active: isModesOpen || temaStore.temaOscuroActivo || temaStore.modoDaltonismoActivo }"
        aria-haspopup="true" :aria-expanded="isModesOpen" @click.stop="toggleModes">
        <i class="bi bi-universal-access"></i>
        <span>Modos</span>
        <i class="bi bi-chevron-down small"></i>
      </button>

      <Transition name="accessibility-dropdown">
        <div v-if="isModesOpen" class="accessibility-dropdown" role="menu">
          <button type="button" class="accessibility-dropdown-item" :class="{ active: temaStore.modoDaltonismoActivo }"
            role="menuitem" @click="toggleColorblindMode">
            <i class="bi bi-eye"></i>
            <span>Modo daltónico</span>
          </button>

          <button type="button" class="accessibility-dropdown-item" :class="{ active: !temaStore.temaOscuroActivo }"
            role="menuitem" @click="selectTheme('claro')">
            <i class="bi bi-sun-fill"></i>
            <span>Modo claro</span>
          </button>

          <button type="button" class="accessibility-dropdown-item" :class="{ active: temaStore.temaOscuroActivo }"
            role="menuitem" @click="selectTheme('oscuro')">
            <i class="bi bi-moon-stars-fill"></i>
            <span>Modo oscuro</span>
          </button>
        </div>
      </Transition>
    </div>

    <button type="button" class="accessibility-button" :disabled="!temaStore.puedeDisminuirFuente"
      title="Reducir tamaño de letra" aria-label="Reducir tamaño de letra" @click="temaStore.disminuirFuente">
      A-
    </button>
    <button type="button" class="accessibility-button" :disabled="!temaStore.puedeAumentarFuente"
      title="Aumentar tamaño de letra" aria-label="Aumentar tamaño de letra" @click="temaStore.aumentarFuente">
      A+
    </button>
  </div>
</template>
