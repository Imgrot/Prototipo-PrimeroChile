import { computed } from 'vue'
import { useTemaStore } from '@/stores/temaStore'

export function useAccessibilityPreferences() {
  const temaStore = useTemaStore()
  temaStore.inicializarTema()

  return {
    theme: computed(() => temaStore.temaHtml),
    colorMode: computed(() => temaStore.colorModeHtml),
    fontScale: computed(() => temaStore.escalaFuente),
    isDarkTheme: computed(() => temaStore.temaOscuroActivo),
    isColorblindMode: computed(() => temaStore.modoDaltonismoActivo),
    setTheme: temaStore.cambiarTema,
    setColorMode: temaStore.cambiarModoColor,
    toggleTheme: temaStore.alternarTema,
    toggleColorMode: temaStore.alternarDaltonismo,
    increaseFont: temaStore.aumentarFuente,
    decreaseFont: temaStore.disminuirFuente,
  }
}
