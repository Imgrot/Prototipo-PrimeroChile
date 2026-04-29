import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { verificarRespuesta } from '@/global/functions/verificarRespuesta'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'
import { getComunas } from '../helpers/getComunas'
import { useComunasStore } from '../store/comunasStore'

export const useComunas = () => {
  const store = useComunasStore()
  const { comunas } = storeToRefs(store)
  const loading = ref(false)
  const error = ref(false)

  const loadComunas = async () => {
    loading.value = true
    error.value = false

    try {
      const response = await getComunas()
      const data = verificarRespuesta(response)

      if (!data) {
        error.value = true
        return
      }

      store.setComunas(normalizarColeccion(data, ['comunas']))
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    comunas: computed(() => normalizarColeccion(comunas.value, ['comunas'])),
    loading,
    error,
    loadComunas,
  }
}
