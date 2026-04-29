import { defineStore } from 'pinia'
import { ref } from 'vue'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'

export const useComunasStore = defineStore(
  'primerochile-comunas',
  () => {
    const comunas = ref([])

    const setComunas = (data) => {
      comunas.value = normalizarColeccion(data, ['comunas'])
    }

    return {
      comunas,
      setComunas,
    }
  },
  {
    persist: true,
  },
)
