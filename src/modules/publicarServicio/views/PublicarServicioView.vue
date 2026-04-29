<script setup>
import { computed, onMounted } from 'vue'
import { usePublicarServicio } from '../composables/usePublicarServicio'

const { form, regions, comunas, loading, success, error, loadOptions, setField, setPhotos, submit } =
  usePublicarServicio()

const categorias = [
  'Hotel',
  'Cabaña',
  'Hostal',
  'Camping',
  'Restaurante',
  'Cafetería',
  'Agencia de Turismo',
  'Rent a Car',
]

const photos = computed(() => form.value.fotografias?.length ? form.value.fotografias : [''])

const updatePhoto = (index, value) => {
  const nextPhotos = [...photos.value]
  nextPhotos[index] = value
  setPhotos(nextPhotos)
}

const addPhoto = () => {
  setPhotos([...photos.value, ''])
}

const removePhoto = (index) => {
  const nextPhotos = photos.value.filter((_, photoIndex) => photoIndex != index)
  setPhotos(nextPhotos.length ? nextPhotos : [''])
}

const handleSubmit = async () => {
  await submit()
}

onMounted(() => {
  loadOptions()
})
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <RouterLink class="breadcrumb-link" to="/emprendedores"><i class="bi bi-arrow-left"></i> Volver al panel</RouterLink>
        <div class="mt-3">
          <span class="eyebrow soft-blue"><i class="bi bi-megaphone"></i> Flujo separado</span>
          <h1 class="section-title mt-3">Comparte tu experiencia con nosotros</h1>
        </div>
      </div>
    </section>

    <section class="section section-tight pt-0">
      <div class="container">
        <div class="form-layout">
          <div class="form-stack">
            <article class="form-card">
              <span class="eyebrow soft-orange"><i class="bi bi-1-circle"></i> Información base</span>
              <h3 class="mt-3">Identidad de la publicación</h3>
              <div class="form-grid">
                <div class="full">
                  <label>Nombre del servicio</label>
                  <input :value="form.nombre" type="text" placeholder="Ej: Hotel del Lago, Tour al volcán, Cabañas del Sur" @input="setField('nombre', $event.target.value)">
                </div>
                <div>
                  <label>Región</label>
                  <select :value="form.regionId" @change="setField('regionId', $event.target.value)">
                    <option value="">Selecciona una región</option>
                    <option v-for="region in regions" :key="region.id" :value="region.id">{{ region.nombre }}</option>
                  </select>
                </div>
                <div>
                  <label>Comuna</label>
                  <select :value="form.comunaId" @change="setField('comunaId', $event.target.value)">
                    <option value="">Selecciona una comuna</option>
                    <option v-for="comuna in comunas" :key="comuna.id" :value="comuna.id">{{ comuna.nombre }}</option>
                  </select>
                </div>
                <div>
                  <label>Categoría</label>
                  <select :value="form.categoria" @change="setField('categoria', $event.target.value)">
                    <option value="">Selecciona una categoría</option>
                    <option v-for="categoria in categorias" :key="categoria" :value="categoria">{{ categoria }}</option>
                  </select>
                </div>
                <div class="full">
                  <label>Descripción breve</label>
                  <textarea :value="form.descripcion" placeholder="Cuenta qué lo hace especial, a quién va dirigido y por qué alguien debería elegirlo." @input="setField('descripcion', $event.target.value)"></textarea>
                </div>
              </div>
            </article>

            <article class="form-card">
              <span class="eyebrow soft-blue"><i class="bi bi-2-circle"></i> Contacto y ubicación</span>
              <h3 class="mt-3">Datos útiles para convertir</h3>
              <div class="form-grid">
                <div>
                  <label>Dirección</label>
                  <input :value="form.direccion" type="text" placeholder="Ej: Camino al volcán km 15" @input="setField('direccion', $event.target.value)">
                </div>
                <div>
                  <label>Google Maps / ubicación exacta</label>
                  <input :value="form.googleMapsLink" type="text" placeholder="Pega el link del mapa o coordenadas" @input="setField('googleMapsLink', $event.target.value)">
                </div>
                <div>
                  <label>Teléfono de contacto</label>
                  <input :value="form.telefono" type="text" placeholder="+56 9 1234 5678" @input="setField('telefono', $event.target.value)">
                </div>
                <div>
                  <label>Email</label>
                  <input :value="form.email" type="email" placeholder="contacto@tuemprendimiento.cl" @input="setField('email', $event.target.value)">
                </div>
                <div>
                  <label>Sitio web</label>
                  <input :value="form.sitioWeb" type="text" placeholder="https://tuemprendimiento.cl" @input="setField('sitioWeb', $event.target.value)">
                </div>
                <div>
                  <label>Tarifa desde</label>
                  <input :value="form.precioDesde" type="text" placeholder="Ej: Desde CLP 50.000 / noche" @input="setField('precioDesde', $event.target.value)">
                </div>
              </div>
            </article>

            <article class="form-card">
              <span class="eyebrow soft-orange"><i class="bi bi-3-circle"></i> Multimedia y RRSS</span>
              <h3 class="mt-3">Contenido visual</h3>
              <div class="form-grid">
                <div class="full">
                  <label>URLs de fotografías</label>
                  <div v-for="(photo, index) in photos" :key="`photo-${index}`" class="d-flex gap-2 mb-2">
                    <input :value="photo" type="text" placeholder="https://ejemplo.com/foto-1.jpg" @input="updatePhoto(index, $event.target.value)">
                    <button class="btn-pc-outline" type="button" @click="removePhoto(index)">Quitar</button>
                  </div>
                  <button class="btn-pc-outline" type="button" @click="addPhoto">Agregar foto</button>
                </div>
                <div>
                  <label>Instagram</label>
                  <input :value="form.instagram" type="text" placeholder="@tu_cuenta o link" @input="setField('instagram', $event.target.value)">
                </div>
                <div>
                  <label>TikTok</label>
                  <input :value="form.tiktok" type="text" placeholder="@tu_cuenta o link" @input="setField('tiktok', $event.target.value)">
                </div>
                <div class="full">
                  <label>Notas internas / equipo editorial</label>
                  <textarea :value="form.notasInternas" placeholder="Espacio útil para revisión, observaciones o recordatorios antes de publicar." @input="setField('notasInternas', $event.target.value)"></textarea>
                </div>
              </div>
            </article>

            <article class="form-card">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div>
                  <h3 class="mb-2">Acciones</h3>
                  <p v-if="error" class="mb-0 text-danger">{{ error }}</p>
                  <p v-if="success" class="mb-0 text-success">El servicio fue enviado correctamente a revisión.</p>
                </div>
                <div class="hero-actions mt-0">
                  <button class="btn-pc-primary" type="button" :disabled="loading" @click="handleSubmit">
                    {{ loading ? 'Enviando...' : 'Publicar servicio' }}
                  </button>
                </div>
              </div>
            </article>
          </div>

          <aside class="preview-sticky">
            <article class="form-card mb-3">
              <span class="eyebrow soft-blue"><i class="bi bi-phone"></i> Preview rápida</span>
              <div class="preview-phone mt-3">
                <div class="preview-phone-inner">
                  <div class="hero-mini">
                    <span class="card-label">{{ form.categoria || 'Categoría' }}</span>
                    <h4>{{ form.nombre || 'Nombre del servicio' }}</h4>
                    <p>{{ comunas.find((comuna) => comuna.id == form.comunaId)?.nombre || 'Comuna' }} + tagline resumida</p>
                  </div>
                  <div class="preview-content">
                    <div class="preview-tile">
                      <strong>Descripción</strong>
                      <p class="mb-0 mt-2">{{ form.descripcion || 'Acá se ve una versión breve de la ficha que finalmente verá el turista.' }}</p>
                    </div>
                    <div class="preview-tile">
                      <strong>CTA principales</strong>
                      <div class="preview-actions mt-3">
                        <a href="#" class="btn-pc-primary">Contactar</a>
                        <a href="#" class="btn-pc-outline">Web</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="section-copy mt-3 mb-0">
                La API actual recibe bien la base de la ficha. Campos como redes sociales y notas internas quedan preparados para la siguiente expansión del backend.
              </p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
