import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { verificarRespuesta } from '@/global/functions/verificarRespuesta'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'
import { getPlaces } from '../helpers/getPlaces'
import { useAtractivosStore } from '../store/atractivosStore'

export const useAtractivos = () => {
  const store = useAtractivosStore()
  const { atractivos } = storeToRefs(store)
  const loading = ref(false)
  const error = ref(false)

  const loadAtractivos = async (params = {}) => {
    loading.value = true
    error.value = false

    try {
      const response = await getPlaces(params)
      const data = verificarRespuesta(response)

      if (!data) {
        error.value = true
        return
      }

      store.setAtractivos(normalizarColeccion(data, ['places', 'atractivos']))
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    atractivos: computed(() => normalizarColeccion(atractivos.value, ['places', 'atractivos'])),
    loading,
    error,
    loadAtractivos,
  }
}
