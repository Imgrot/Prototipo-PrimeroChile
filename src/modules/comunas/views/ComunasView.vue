<script setup>
import { computed, onMounted, ref } from 'vue'
import { resolveMediaUrl } from '@/global/functions/resolveMediaUrl'
import { useComunas } from '../composables/useComunas'

const { comunas, loading, error, loadComunas } = useComunas()
const search = ref('')

const fallbackImages = {
  pucon: '/assets/img/card-rutas.svg',
  temuco: '/assets/img/card-cultura.svg',
  villarrica: '/assets/img/card-termas.svg',
  curarrehue: '/assets/img/card-comunidad.svg',
  melipeuco: '/assets/img/card-aventura.svg',
  'lican-ray': '/assets/img/card-termas.svg',
  caburgua: '/assets/img/card-rutas.svg',
  cunco: '/assets/img/card-cultura.svg',
}

const filteredComunas = computed(() => {
  const query = search.value.trim().toLowerCase()
  if (!query) return comunas.value

  return comunas.value.filter((comuna) =>
    [comuna.nombre, comuna.descripcion, comuna.historia, comuna.comoLlegar]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query)),
  )
})

const topComunas = computed(() => filteredComunas.value.slice(0, 4))

const getComunaImage = (comuna) => {
  return resolveMediaUrl(comuna.imagen, fallbackImages[comuna.slug] || '/assets/img/card-rutas.svg')
}

onMounted(() => {
  if (!comunas.value.length) {
    loadComunas()
  }
})
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-blue"><i class="bi bi-signpost"></i> Vista separada</span>
        <h1 class="section-title mt-3">Comunas destacadas, con más contexto y menos ruido</h1>
        <p class="section-copy mb-0">
          Ahora esta vista puede alimentarse desde la API y seguir respetando el orden del prototipo.
        </p>
      </div>
    </section>

    <section class="section section-tight pt-0">
      <div class="container">
        <div class="page-layout" data-layout>
          <aside class="page-sidebar">
            <div class="sidebar-toggle-row">
              <div class="sidebar-brand">
                <img src="/assets/img/logo-pc.jpg" alt="Logo">
                <div class="sidebar-brand-copy">
                  <h3>Explorar comunas</h3>
                </div>
              </div>
              <button class="sidebar-toggle" data-sidebar-toggle type="button" aria-label="Ocultar sidebar">
                <i class="bi bi-layout-sidebar-inset"></i>
              </button>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Atajos</h4>
              <a class="sidebar-link active" href="#destacadas"><i class="bi bi-stars"></i> <span class="sidebar-text">Destacadas</span></a>
              <a class="sidebar-link" href="#rutas"><i class="bi bi-map"></i> <span class="sidebar-text">Rutas sugeridas</span></a>
              <a class="sidebar-link" href="#planifica"><i class="bi bi-bag-check"></i> <span class="sidebar-text">Planifica tu viaje</span></a>
            </div>
          </aside>

          <div>
            <div class="content-toolbar">
              <div class="toolbar-search">
                <i class="bi bi-search"></i>
                <input v-model="search" type="text" placeholder="Buscar comuna, experiencia o imperdible...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/atractivos"><i class="bi bi-stars"></i> Ver atractivos</RouterLink>
                <RouterLink class="btn-pc-primary" to="/servicios"><i class="bi bi-bag-check"></i> Servicios cercanos</RouterLink>
              </div>
            </div>

            <section id="destacadas" class="page-content-grid">
              <div class="results-grid">
                <article v-for="comuna in topComunas" :key="comuna.id" class="pc-card listing-card">
                  <div class="cover"><img :src="getComunaImage(comuna)" :alt="comuna.nombre"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="eyebrow soft-orange"><i class="bi bi-pin-map"></i> {{ comuna.destacado ? 'Destacada' : 'Explorar' }}</span>
                        <h3 class="mt-2">{{ comuna.nombre }}</h3>
                        <p>{{ comuna.descripcion }}</p>
                      </div>
                      <span class="small-badge">{{ comuna._count?.places || 0 }} lugares</span>
                    </div>
                    <ul class="card-list">
                      <li><i class="bi bi-star-fill"></i> {{ comuna.historia || 'Historia y relato local disponibles en el detalle futuro.' }}</li>
                      <li><i class="bi bi-star-fill"></i> {{ comuna.comoLlegar || 'Información de acceso disponible.' }}</li>
                      <li><i class="bi bi-star-fill"></i> {{ comuna._count?.providers || 0 }} servicios y {{ comuna._count?.notas || 0 }} notas asociadas.</li>
                    </ul>
                    <div class="preview-actions mt-4">
                      <RouterLink class="btn-pc-outline" :to="{ path: '/servicios', query: { comuna: comuna.slug } }">Ver servicios</RouterLink>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section id="rutas" class="mt-4">
              <div class="section-header text-start mx-0 mb-3">
                <span class="eyebrow soft-blue"><i class="bi bi-map"></i> Bloque extra</span>
                <h2 class="section-title mb-2" style="font-size:2rem">Rutas sugeridas por intención</h2>
                <p class="section-copy">Este bloque puede terminar siendo editorial; por ahora toma comunas reales para orientar.</p>
              </div>
              <div class="row g-4">
                <div v-for="comuna in filteredComunas.slice(0, 3)" :key="`route-${comuna.id}`" class="col-xl-4">
                  <article class="preview-card pc-card">
                    <div class="thumb"><img :src="getComunaImage(comuna)" :alt="comuna.nombre"></div>
                    <h3>{{ comuna.nombre }}</h3>
                    <p>{{ comuna.descripcion }}</p>
                    <ul>
                      <li>{{ comuna.distanciaTemuco || 'Distancia por definir' }}</li>
                      <li>{{ comuna.poblacion || 'Población de referencia' }}</li>
                      <li>{{ comuna.altitud || 'Altitud referencial' }}</li>
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            <section id="planifica" class="mt-4">
              <div class="map-placeholder">
                <div class="inner">
                  <strong>Mapa / módulo de planificación</strong>
                  <p class="mb-0 mt-2">La vista ya puede mostrar comunas reales; el mapa queda listo para una segunda integración.</p>
                </div>
              </div>
            </section>

            <div v-if="loading" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">Cargando comunas desde la API...</p>
            </div>
            <div v-else-if="error" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">No fue posible cargar comunas reales en este momento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
