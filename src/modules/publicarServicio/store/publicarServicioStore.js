import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultForm = () => ({
  nombre: '',
  regionId: '',
  comunaId: '',
  categoria: '',
  descripcion: '',
  direccion: '',
  telefono: '',
  email: '',
  sitioWeb: '',
  precioDesde: '',
  googleMapsLink: '',
  fotografias: [''],
  instagram: '',
  tiktok: '',
  notasInternas: '',
})

export const usePublicarServicioStore = defineStore(
  'primerochile-publicar-servicio',
  () => {
    const form = ref(defaultForm())

    const setField = (key, value) => {
      form.value[key] = value
    }

    const setPhotos = (photos) => {
      form.value.fotografias = photos
    }

    const resetForm = () => {
      form.value = defaultForm()
    }

    return {
      form,
      setField,
      setPhotos,
      resetForm,
    }
  },
  {
    persist: true,
  },
)
