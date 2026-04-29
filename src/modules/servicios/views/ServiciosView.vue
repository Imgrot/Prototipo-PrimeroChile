<script setup>
import { computed, onMounted, ref } from 'vue'
import { useServicios, normalizeProviderGroup } from '../composables/useServicios'

const { providers, loading, error, loadProviders } = useServicios()
const search = ref('')
const currentTab = ref('all')

const serviceTypes = ['Hotel', 'Cabaña', 'Hostal', 'Camping', 'Restaurante', 'Cafetería', 'Agencia de Turismo', 'Rent a Car']

const filteredProviders = computed(() => {
  const query = search.value.trim().toLowerCase()

  return providers.value.filter((provider) => {
    const matchesQuery =
      !query ||
      [provider.nombre, provider.descripcion, provider.categoria, provider.region?.nombre]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))

    const providerGroup = normalizeProviderGroup(provider.categoria)
    const matchesTab = currentTab.value == 'all' || providerGroup == currentTab.value

    return matchesQuery && matchesTab
  })
})

const visibleTypes = computed(() => [...new Set(filteredProviders.value.map((provider) => provider.categoria))])

onMounted(() => {
  if (!providers.value.length) {
    loadProviders()
  }
})
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-blue"><i class="bi bi-bag-check"></i> Vista separada</span>
        <h1 class="section-title mt-3">Servicios turísticos recomendados</h1>
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
                  <h3>Filtrar servicios</h3>
                  <p>Alojamiento, comida, agencias y transporte.</p>
                </div>
              </div>
              <button class="sidebar-toggle" data-sidebar-toggle type="button">
                <i class="bi bi-layout-sidebar-inset"></i>
              </button>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Tipo</h4>
              <div class="check-stack">
                <label v-for="tipo in serviceTypes" :key="tipo" class="check-chip"><input type="checkbox" checked
                    disabled> <span>{{ tipo }}</span></label>
              </div>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Detectados</h4>
              <div class="tag-row">
                <span v-for="tipo in visibleTypes" :key="tipo" class="small-badge">{{ tipo }}</span>
              </div>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Mapa / cercanía</h4>
              <h5 class="sidebar-subtitle">Minimapa y estimaciones</h5>
            </div>
          </aside>

          <div>
            <div class="content-toolbar">
              <div class="toolbar-search">
                <i class="bi bi-search"></i>
                <input v-model="search" type="text" placeholder="Buscar servicio, comuna o especialidad...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/publicar-servicio"><i class="bi bi-plus-circle"></i> Publicar
                </RouterLink>
                <RouterLink class="btn-pc-primary" to="/comunidad"><i class="bi bi-instagram"></i> Ver comunidad
                </RouterLink>
              </div>
            </div>

            <section>
              <div class="service-tabs">
                <button type="button" class="service-tab" :class="{ active: currentTab == 'all' }"
                  @click="currentTab = 'all'">Todos</button>
                <button type="button" class="service-tab" :class="{ active: currentTab == 'alojamiento' }"
                  @click="currentTab = 'alojamiento'">Alojamiento</button>
                <button type="button" class="service-tab" :class="{ active: currentTab == 'gastronomia' }"
                  @click="currentTab = 'gastronomia'">Gastronomía</button>
                <button type="button" class="service-tab" :class="{ active: currentTab == 'agencia' }"
                  @click="currentTab = 'agencia'">Agencias</button>
                <button type="button" class="service-tab" :class="{ active: currentTab == 'transporte' }"
                  @click="currentTab = 'transporte'">Transporte</button>
              </div>

              <div class="service-grid">
                <article v-for="provider in filteredProviders" :key="provider.id" class="service-card"
                  style="--service-accent:#2563eb">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>{{ provider.nombre }}</h3>
                    <span class="small-badge">{{ provider.categoria }}</span>
                  </div>
                  <p>{{ provider.descripcion }}</p>
                  <div class="service-meta">
                    <div v-if="provider.precioDesde"><i class="bi bi-cash"></i> {{ provider.precioDesde }}</div>
                    <div v-if="provider.telefono"><i class="bi bi-telephone"></i> {{ provider.telefono }}</div>
                    <div v-if="provider.direccion"><i class="bi bi-geo-alt"></i> {{ provider.direccion }}</div>
                    <div v-else-if="provider.region?.nombre"><i class="bi bi-geo-alt"></i> {{ provider.region.nombre }}
                    </div>
                  </div>
                  <div class="service-actions">
                    <a v-if="provider.telefono" :href="`tel:${provider.telefono}`" class="btn-pc-primary">Contactar</a>
                    <a v-if="provider.sitioWeb" :href="provider.sitioWeb" target="_blank" rel="noreferrer"
                      class="btn-pc-outline">Web</a>
                  </div>
                </article>
              </div>
            </section>

            <section class="mt-4">
              <div class="row g-4">
                <div class="col-lg-7">
                  <div class="map-placeholder">
                    <div class="inner">
                      <strong>Mapa de servicios cercanos</strong>
                      <p class="mb-0 mt-1">La capa de datos ya está integrada; el minimapa puede venir en la siguiente
                        iteración.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div v-if="loading" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">Cargando servicios reales...</p>
            </div>
            <div v-else-if="error" class="section-header text-start mx-0 mt-4">
              <p class="section-copy">No fue posible cargar los servicios desde la API.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
