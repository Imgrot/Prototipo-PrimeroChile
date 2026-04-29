import { defineStore } from 'pinia'
import { ref } from 'vue'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'

export const useServiciosStore = defineStore(
  'primerochile-servicios',
  () => {
    const providers = ref([])

    const setProviders = (data) => {
      providers.value = normalizarColeccion(data, ['providers'])
    }

    return {
      providers,
      setProviders,
    }
  },
  {
    persist: true,
  },
)
