<script setup>
import { computed, onMounted } from 'vue'
import { resolveMediaUrl } from '@/global/functions/resolveMediaUrl'
import { useHome } from '../composables/useHome'

const { region, loading, error, loadRegion } = useHome()

const heroImage = computed(() =>
  resolveMediaUrl(region.value?.imagen, '/assets/img/hero-araucania.jpg'),
)

const featuredPlaces = computed(() => (region.value?.places || []).filter((item) => item.destacado).slice(0, 3))
const featuredProviders = computed(() =>
  (region.value?.providers || []).filter((item) => item.destacado).slice(0, 3),
)

onMounted(() => {
  if (!region.value) {
    loadRegion()
  }
})
</script>

<template>
  <main>
    <section class="hero-home" :style="{ '--hero-image': `url('${heroImage}')` }">
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow light"><i class="bi bi-geo-alt-fill"></i> {{ region?.nombre || 'La Araucanía, Chile' }}</span>
          <p class="hero-copy">
            {{ region?.descripcion || 'Una vitrina más clara para descubrir comunas, atractivos y servicios turísticos.' }}
          </p>
          <div class="hero-actions">
            <RouterLink class="btn-pc-primary" to="/comunas"><i class="bi bi-signpost-split"></i> Explorar comunas</RouterLink>
            <RouterLink class="btn-pc-light" to="/atractivos"><i class="bi bi-stars"></i> Ver atractivos</RouterLink>
            <RouterLink class="btn-pc-light" to="/servicios"><i class="bi bi-bag-check"></i> Buscar servicios</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-highlights">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-4">
            <article class="info-card pc-card">
              <div class="icon-wrap icon-climate"><i class="bi bi-brightness-high"></i></div>
              <h3>Clima</h3>
              <p>{{ region?.clima || 'Información climática disponible al conectar la región.' }}</p>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="info-card pc-card">
              <div class="icon-wrap icon-season"><i class="bi bi-calendar-event"></i></div>
              <h3>Mejor época</h3>
              <p>{{ region?.mejorEpoca || 'Temporadas recomendadas para planificar el viaje.' }}</p>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="info-card pc-card">
              <div class="icon-wrap icon-arrival"><i class="bi bi-airplane"></i></div>
              <h3>Cómo llegar</h3>
              <p>{{ region?.comoLlegar || 'Vías de acceso, aeropuerto y conexiones principales.' }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-lg-7">
            <div class="intro-copy-card pc-card">
              <span class="eyebrow soft-blue"><i class="bi bi-lightbulb"></i> Base viva de contenido</span>
              <p class="mt-3">
                {{ region?.descripcion || 'Esta home ahora queda preparada para tomar datos reales desde la API y sostener la narrativa del prototipo.' }}
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="cta-panel">
              <h3>{{ region?.capital ? `Capital base: ${region.capital}` : 'Planifica tu entrada a la región' }}</h3>
              <p>
                {{ region ? `${region.places?.length || 0} atractivos y ${region.providers?.length || 0} servicios ya pueden poblar esta interfaz.` : 'Conectando datos reales de la región.' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="feature-grid">
          <article class="feature-card feature-lg" style="--bg-image:url('/assets/img/scene-lake.jpg')">
            <div class="feature-card-content">
              <span class="card-label"><i class="bi bi-signpost"></i> Comunas destacadas</span>
              <h3>Explora destinos por comuna</h3>
              <p>La vista de comunas puede cargar datos reales y mantener la estructura más limpia del prototipo.</p>
              <div class="hero-actions mt-3">
                <RouterLink class="btn-pc-light" to="/comunas">Ir a comunas</RouterLink>
              </div>
            </div>
          </article>

          <article class="feature-card feature-sm" style="--bg-image:url('/assets/img/scene-forest.jpg')">
            <div class="feature-card-content">
              <span class="card-label"><i class="bi bi-stars"></i> Experiencias</span>
              <h3>Atractivos por tipo</h3>
              <p>Volcanes, termas, gastronomía y rutas pueden poblarse desde la API sin perder la intención visual.</p>
              <div class="hero-actions mt-3">
                <RouterLink class="btn-pc-light" to="/atractivos">Ver atractivos</RouterLink>
              </div>
            </div>
          </article>
        </div>

        <div class="row g-4 mt-2">
          <div class="col-lg-4">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-rutas.svg" alt="Comunas"></div>
              <h3>Comunas con identidad propia</h3>
              <p>La nueva estructura deja a cada comuna con un espacio claro, menos ruido y más contexto útil.</p>
              <div class="meta">
                <span class="meta-pill">{{ region?.capital || 'Región base' }}</span>
                <span class="meta-pill">{{ region?.places?.length || 0 }} atractivos</span>
                <span class="meta-pill">{{ region?.providers?.length || 0 }} servicios</span>
              </div>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-food.svg" alt="Servicios"></div>
              <h3>Servicios con datos reales</h3>
              <p>Los proveedores destacados del backend pueden poblar la maqueta sin volver a meter todo en la home.</p>
              <div class="meta">
                <span v-for="provider in featuredProviders" :key="provider.id" class="meta-pill">{{ provider.nombre }}</span>
              </div>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-comunidad.svg" alt="Comunidad"></div>
              <h3>RRSS y comunidad mejor integradas</h3>
              <p>Esta capa todavía puede seguir editorial, mientras resolvemos el backend específico de comunidad.</p>
              <div class="meta">
                <span class="meta-pill">Feed social</span>
                <span class="meta-pill">Noticias</span>
                <span class="meta-pill">Galería</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-aventura.svg" alt="Atractivos"></div>
              <h3>Atractivos imperdibles</h3>
              <p>La vista dedicada ya puede tomar lugares reales desde la API y mostrarlos con mejor jerarquía.</p>
              <div class="meta">
                <span v-for="place in featuredPlaces" :key="place.id" class="meta-pill">{{ place.nombre }}</span>
              </div>
              <div class="preview-actions">
                <RouterLink class="btn-pc-outline" to="/atractivos">Abrir vista</RouterLink>
              </div>
            </article>
          </div>
          <div class="col-lg-6">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-hotel.svg" alt="Servicios"></div>
              <h3>Servicios turísticos</h3>
              <p>El frontend ya queda preparado para filtrar y buscar proveedores reales con una capa de datos más limpia.</p>
              <div class="preview-actions">
                <RouterLink class="btn-pc-outline" to="/servicios">Abrir vista</RouterLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow soft-blue"><i class="bi bi-instagram"></i> Social + comunidad</span>
          <h2 class="section-title">Bloques nuevos que el backend actual todavía no cubre completos</h2>
        </div>

        <div class="row g-4">
          <div class="col-lg-7">
            <article class="social-block pc-card h-100">
              <div class="social-header">
                <h3>Últimas publicaciones</h3>
              </div>
              <div class="scroll-shell">
                <div class="scroll-row">
                  <div class="scroll-item"><div class="media-preview"><img src="/assets/img/social-instagram.svg" alt="Instagram"></div></div>
                  <div class="scroll-item"><div class="media-preview"><img src="/assets/img/social-tiktok.svg" alt="TikTok"></div></div>
                  <div class="scroll-item"><div class="media-preview"><img src="/assets/img/card-comunidad.svg" alt="Comunidad"></div></div>
                </div>
              </div>
            </article>
          </div>

          <div class="col-lg-5">
            <article class="social-block pc-card h-100">
              <div class="social-header">
                <h3>Noticias y agenda</h3>
                <RouterLink to="/comunidad" class="btn-pc-ghost">Ver vista completa</RouterLink>
              </div>
              <div class="news-list">
                <div class="news-card">
                  <div class="news-date">API</div>
                  <div>
                    <h4>Notas públicas aún por exponer</h4>
                    <p>Este espacio queda listo para conectarse cuando exista un endpoint editorial público.</p>
                  </div>
                </div>
                <div class="news-card">
                  <div class="news-date">Next</div>
                  <div>
                    <h4>Comunidad como segunda fase</h4>
                    <p>La estética queda preservada mientras resolvemos noticias, agenda y galería comunitaria.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div v-if="loading" class="section-header mt-4">
          <p class="section-copy">Cargando información de la región...</p>
        </div>
        <div v-else-if="error" class="section-header mt-4">
          <p class="section-copy">No fue posible cargar la información real de la región. La vista quedó preparada para reintentar.</p>
        </div>
      </div>
    </section>
  </main>
</template>
