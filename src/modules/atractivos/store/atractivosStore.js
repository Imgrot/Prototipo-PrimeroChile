import { defineStore } from 'pinia'
import { ref } from 'vue'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'

export const useAtractivosStore = defineStore(
  'primerochile-atractivos',
  () => {
    const atractivos = ref([])

    const setAtractivos = (data) => {
      atractivos.value = normalizarColeccion(data, ['places', 'atractivos'])
    }

    return {
      atractivos,
      setAtractivos,
    }
  },
  {
    persist: true,
  },
)
