import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore(
  'primerochile-home',
  () => {
    const region = ref(null)
    const cargado = ref(false)

    const setRegion = (data) => {
      region.value = data
      cargado.value = true
    }

    return {
      region,
      cargado,
      setRegion,
    }
  },
  {
    persist: true,
  },
)
