import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { verificarRespuesta } from '@/global/functions/verificarRespuesta'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'
import { getProviders } from '../helpers/getProviders'
import { useServiciosStore } from '../store/serviciosStore'

export const normalizeProviderGroup = (categoria) => {
  if (['Hotel', 'Cabaña', 'Hostal', 'Camping'].includes(categoria)) return 'alojamiento'
  if (['Restaurante', 'Cafetería'].includes(categoria)) return 'gastronomia'
  if (categoria == 'Agencia de Turismo') return 'agencia'
  return 'transporte'
}

export const useServicios = () => {
  const store = useServiciosStore()
  const { providers } = storeToRefs(store)
  const loading = ref(false)
  const error = ref(false)

  const loadProviders = async (params = {}) => {
    loading.value = true
    error.value = false

    try {
      const response = await getProviders(params)
      const data = verificarRespuesta(response)

      if (!data) {
        error.value = true
        return
      }

      store.setProviders(normalizarColeccion(data, ['providers']))
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    providers: computed(() => normalizarColeccion(providers.value, ['providers'])),
    loading,
    error,
    loadProviders,
  }
}
