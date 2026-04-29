import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { verificarRespuesta } from '@/global/functions/verificarRespuesta'
import { normalizarColeccion } from '@/global/functions/normalizarColeccion'
import { getRegions } from '../helpers/getRegions'
import { getComunas } from '../helpers/getComunas'
import { postProvider } from '../helpers/postProvider'
import { usePublicarServicioStore } from '../store/publicarServicioStore'

export const usePublicarServicio = () => {
  const store = usePublicarServicioStore()
  const { form } = storeToRefs(store)
  const regions = ref([])
  const comunas = ref([])
  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  const loadOptions = async () => {
    const [regionsResponse, comunasResponse] = await Promise.all([getRegions(), getComunas()])

    const regionsData = verificarRespuesta(regionsResponse)
    const comunasData = verificarRespuesta(comunasResponse)

    regions.value = normalizarColeccion(regionsData, ['regions', 'regiones'])
    comunas.value = normalizarColeccion(comunasData, ['comunas'])
  }

  const submit = async () => {
    loading.value = true
    error.value = ''
    success.value = false

    try {
      const payload = {
        nombre: form.value.nombre,
        regionId: form.value.regionId,
        comunaId: form.value.comunaId || null,
        categoria: form.value.categoria,
        descripcion: form.value.descripcion,
        direccion: form.value.direccion || null,
        telefono: form.value.telefono,
        email: form.value.email || null,
        sitioWeb: form.value.sitioWeb || null,
        precioDesde: form.value.precioDesde || null,
        googleMapsLink: form.value.googleMapsLink || null,
        fotografias: form.value.fotografias.filter(Boolean).join(','),
        instagram: form.value.instagram || null,
        tiktok: form.value.tiktok || null,
        notasInternas: form.value.notasInternas || null,
      }

      const response = await postProvider(payload)
      const data = verificarRespuesta(response)

      if (!data) {
        error.value = response?.data?.error || 'No fue posible publicar el servicio.'
        return false
      }

      success.value = true
      store.resetForm()
      return true
    } catch {
      error.value = 'No fue posible publicar el servicio.'
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    form: computed(() => form.value),
    regions,
    comunas,
    loading,
    success,
    error,
    loadOptions,
    setField: store.setField,
    setPhotos: store.setPhotos,
    submit,
  }
}
