import { defineStore } from 'pinia'

const STORAGE_KEY = 'primerochile_tema'
const LEGACY_STORAGE_KEY = 'primerochile_accessibility_preferences'

const FONT_SCALES = ['small', 'normal', 'large', 'extra-large']

const getRoot = () => {
  if (typeof document == 'undefined') return null
  return document.documentElement
}

const getBody = () => {
  if (typeof document == 'undefined') return null
  return document.body
}

const getStorage = () => {
  if (typeof window == 'undefined') return null
  return window.localStorage
}

const normalizarTema = (tema) => {
  return tema == 'dark' || tema == 'oscuro' ? 'oscuro' : 'claro'
}

const normalizarFuente = (escala) => {
  return FONT_SCALES.includes(escala) ? escala : 'normal'
}

const normalizarPreferencias = (preferencias = {}) => {
  return {
    temaActual: normalizarTema(preferencias.temaActual ?? preferencias.theme ?? preferencias.tema),
    modoDaltonismo: Boolean(preferencias.modoDaltonismo ?? preferencias.colorMode == 'colorblind'),
    escalaFuente: normalizarFuente(preferencias.escalaFuente ?? preferencias.fontScale),
  }
}

export const useTemaStore = defineStore('temaStore', {
  state: () => ({
    temaActual: 'claro',
    modoDaltonismo: false,
    escalaFuente: 'normal',
    temaInicializado: false,
  }),

  getters: {
    temaOscuroActivo: (state) => state.temaActual == 'oscuro',
    modoDaltonismoActivo: (state) => state.modoDaltonismo,
    temaHtml: (state) => (state.temaActual == 'oscuro' ? 'dark' : 'light'),
    colorModeHtml: (state) => (state.modoDaltonismo ? 'colorblind' : 'default'),
    puedeAumentarFuente: (state) => FONT_SCALES.indexOf(state.escalaFuente) < FONT_SCALES.length - 1,
    puedeDisminuirFuente: (state) => FONT_SCALES.indexOf(state.escalaFuente) > 0,
  },

  actions: {
    inicializarTema() {
      if (!this.temaInicializado) {
        this.cargarPreferencias()
        this.temaInicializado = true
      }

      this.aplicarTema()
    },

    cargarPreferencias() {
      const storage = getStorage()
      if (!storage) return

      const stored = storage.getItem(STORAGE_KEY) || storage.getItem(LEGACY_STORAGE_KEY)
      if (!stored) return

      try {
        const preferencias = normalizarPreferencias(JSON.parse(stored))
        this.temaActual = preferencias.temaActual
        this.modoDaltonismo = preferencias.modoDaltonismo
        this.escalaFuente = preferencias.escalaFuente
      } catch {
        storage.removeItem(STORAGE_KEY)
        storage.removeItem(LEGACY_STORAGE_KEY)
      }
    },

    guardarPreferencias() {
      const storage = getStorage()
      if (!storage) return

      storage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          temaActual: this.temaActual,
          modoDaltonismo: this.modoDaltonismo,
          escalaFuente: this.escalaFuente,
        }),
      )
    },

    aplicarTema() {
      const root = getRoot()
      const body = getBody()
      if (!root) return

      root.dataset.theme = this.temaHtml
      root.dataset.colorMode = this.colorModeHtml
      root.dataset.fontScale = this.escalaFuente

      root.classList.toggle('tema-claro', !this.temaOscuroActivo)
      root.classList.toggle('tema-oscuro', this.temaOscuroActivo)
      root.classList.toggle('modo-daltonismo', this.modoDaltonismoActivo)

      if (body) {
        body.classList.toggle('tema-claro', !this.temaOscuroActivo)
        body.classList.toggle('tema-oscuro', this.temaOscuroActivo)
        body.classList.toggle('modo-daltonismo', this.modoDaltonismoActivo)
      }

      root.style.colorScheme = this.temaOscuroActivo ? 'dark' : 'light'
    },

    actualizarPreferencias() {
      this.aplicarTema()
      this.guardarPreferencias()
    },

    cambiarTema(tema) {
      this.temaActual = normalizarTema(tema)
      this.actualizarPreferencias()
    },

    cambiarModoColor(modo) {
      this.modoDaltonismo = modo == 'colorblind' || modo == 'daltonismo'
      this.actualizarPreferencias()
    },

    alternarTema() {
      this.cambiarTema(this.temaOscuroActivo ? 'claro' : 'oscuro')
    },

    alternarDaltonismo() {
      this.modoDaltonismo = !this.modoDaltonismo
      this.actualizarPreferencias()
    },

    aumentarFuente() {
      const currentIndex = FONT_SCALES.indexOf(this.escalaFuente)
      this.escalaFuente = FONT_SCALES[Math.min(currentIndex + 1, FONT_SCALES.length - 1)]
      this.actualizarPreferencias()
    },

    disminuirFuente() {
      const currentIndex = FONT_SCALES.indexOf(this.escalaFuente)
      this.escalaFuente = FONT_SCALES[Math.max(currentIndex - 1, 0)]
      this.actualizarPreferencias()
    },

    reiniciarFuente() {
      this.escalaFuente = 'normal'
      this.actualizarPreferencias()
    },
  },
})
