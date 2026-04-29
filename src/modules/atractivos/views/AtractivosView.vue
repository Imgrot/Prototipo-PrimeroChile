<script setup>
import { computed, onMounted, ref } from 'vue'
import { resolveMediaUrl } from '@/global/functions/resolveMediaUrl'
import { useAtractivos } from '../composables/useAtractivos'

const { atractivos, loading, error, loadAtractivos } = useAtractivos()
const search = ref('')
const selectedCategories = ref([])

const categoryFallbacks = {
  Volcán: '/assets/img/card-aventura.svg',
  Termas: '/assets/img/card-termas.svg',
  Lago: '/assets/img/card-rutas.svg',
  Playa: '/assets/img/card-rutas.svg',
  Mercado: '/assets/img/card-food.svg',
  Museo: '/assets/img/card-cultura.svg',
  Aventura: '/assets/img/card-aventura.svg',
}

const categories = computed(() => [...new Set(atractivos.value.map((item) => item.categoria).filter(Boolean))])

const filteredAtractivos = computed(() => {
  const query = search.value.trim().toLowerCase()

  return atractivos.value.filter((item) => {
    const matchesQuery =
      !query ||
      [item.nombre, item.descripcion, item.categoria, item.region?.nombre]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))

    const matchesCategory =
      !selectedCategories.value.length || selectedCategories.value.includes(item.categoria)

    return matchesQuery && matchesCategory
  })
})

const featuredPlaces = computed(() => filteredAtractivos.value.filter((item) => item.destacado).slice(0, 3))
const remainingPlaces = computed(() =>
  filteredAtractivos.value.filter((item) => !featuredPlaces.value.some((featured) => featured.id == item.id)),
)

const toggleCategory = (categoria) => {
  if (selectedCategories.value.includes(categoria)) {
    selectedCategories.value = selectedCategories.value.filter((item) => item != categoria)
    return
  }

  selectedCategories.value = [...selectedCategories.value, categoria]
}

const getPlaceImage = (place) => {
  return resolveMediaUrl(place.imagen, categoryFallbacks[place.categoria] || '/assets/img/card-rutas.svg')
}

onMounted(() => {
  if (!atractivos.value.length) {
    loadAtractivos()
  }
})
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-orange"><i class="bi bi-stars"></i> Vista separada</span>
        <h1 class="section-title mt-3">Atractivos imperdibles, agrupados por experiencia</h1>
        <p class="section-copy mb-0">
          Esta página ya puede poblar sus tarjetas con lugares reales del backend existente.
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
                  <h3>Filtrar atractivos</h3>
                </div>
              </div>
              <button class="sidebar-toggle" data-sidebar-toggle type="button">
                <i class="bi bi-layout-sidebar-inset"></i>
              </button>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Categorías</h4>
              <div class="check-stack">
                <label v-for="categoria in categories" :key="categoria" class="check-chip">
                  <input :checked="selectedCategories.includes(categoria)" type="checkbox" @change="toggleCategory(categoria)">
                  <span>{{ categoria }}</span>
                </label>
              </div>
            </div>
          </aside>

          <div>
            <div class="content-toolbar">
              <div class="toolbar-search">
                <i class="bi bi-search"></i>
                <input v-model="search" type="text" placeholder="Buscar atractivo, comuna o tipo de panorama...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/comunas">Ver comunas</RouterLink>
                <RouterLink class="btn-pc-primary" to="/servicios">Ver servicios relacionados</RouterLink>
              </div>
            </div>

            <section class="page-content-grid">
              <div class="row g-4">
                <div v-for="place in featuredPlaces" :key="place.id" class="col-xl-4">
                  <article class="preview-card pc-card h-100">
                    <div class="thumb"><img :src="getPlaceImage(place)" :alt="place.nombre"></div>
                    <h3>{{ place.nombre }}</h3>
                    <p>{{ place.descripcion }}</p>
                    <div class="meta">
                      <span class="meta-pill">{{ place.categoria }}</span>
                      <span v-if="place.precio" class="meta-pill">{{ place.precio }}</span>
                      <span v-if="place.horario" class="meta-pill">{{ place.horario }}</span>
                    </div>
                  </article>
                </div>
              </div>

              <div class="section-header text-start mx-0 mt-3 mb-2">
                <span class="eyebrow soft-blue"><i class="bi bi-images"></i> Más lugares</span>
                <h2 class="section-title mb-2" style="font-size:2rem">Explora por tipo de experiencia</h2>
                <p class="section-copy">La estructura editorial del prototipo ahora puede respirar con contenido real.</p>
              </div>

              <div class="results-grid">
                <article v-for="place in remainingPlaces" :key="`rest-${place.id}`" class="pc-card listing-card">
                  <div class="cover"><img :src="getPlaceImage(place)" :alt="place.nombre"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="small-badge">{{ place.categoria }}</span>
                        <h3 class="mt-2">{{ place.nombre }}</h3>
                        <p>{{ place.descripcion }}</p>
                      </div>
                    </div>
                    <p class="mb-0">
                      {{ place.recomendaciones || place.mejorEpoca || 'Contenido adicional listo para una ficha más rica en una segunda etapa.' }}
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <div v-if="loading" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">Cargando atractivos reales...</p>
            </div>
            <div v-else-if="error" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">No fue posible cargar los atractivos desde la API.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
