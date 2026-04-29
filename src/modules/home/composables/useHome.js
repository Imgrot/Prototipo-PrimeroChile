import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { verificarRespuesta } from '@/global/functions/verificarRespuesta'
import { getRegion } from '../helpers/getRegion'
import { useHomeStore } from '../store/homeStore'

export const useHome = () => {
  const store = useHomeStore()
  const { region, cargado } = storeToRefs(store)
  const loading = ref(false)
  const error = ref(false)

  const loadRegion = async (slug = 'araucania') => {
    loading.value = true
    error.value = false

    try {
      const response = await getRegion(slug)
      const data = verificarRespuesta(response)

      if (!data) {
        error.value = true
        return
      }

      store.setRegion(data)
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    region: computed(() => region.value),
    cargado,
    loading,
    error,
    loadRegion,
  }
}
