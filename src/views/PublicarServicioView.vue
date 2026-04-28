<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <RouterLink class="breadcrumb-link" to="/emprendedores"><i class="bi bi-arrow-left"></i> Volver al panel
        </RouterLink>
        <div class="mt-3">
          <span class="eyebrow soft-blue"><i class="bi bi-megaphone"></i> Flujo separado</span>
          <h1 class="section-title mt-3">Comparte tu experiencia con nosotros!</h1>
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
                  <input type="text" placeholder="Ej: Hotel del Lago, Tour al volcán, Cabañas del Sur">
                </div>
                <div>
                  <label>Comuna</label>
                  <select>
                    <option>Selecciona una comuna</option>
                    <option>Pucón</option>
                    <option>Villarrica</option>
                    <option>Temuco</option>
                    <option>Curarrehue</option>
                  </select>
                </div>
                <div>
                  <label>Categoría</label>
                  <select>
                    <option>Selecciona una categoría</option>
                    <option>Alojamiento</option>
                    <option>Gastronomía</option>
                    <option>Agencia</option>
                    <option>Experiencia cultural</option>
                  </select>
                </div>
                <div class="full">
                  <label>Descripción breve</label>
                  <textarea
                    placeholder="Cuenta qué lo hace especial, a quién va dirigido y por qué alguien debería elegirlo."></textarea>
                </div>
              </div>
            </article>

            <article class="form-card">
              <span class="eyebrow soft-blue"><i class="bi bi-2-circle"></i> Contacto y ubicación</span>
              <h3 class="mt-3">Datos útiles para convertir</h3>
              <div class="form-grid">
                <div>
                  <label>Dirección</label>
                  <input type="text" placeholder="Ej: Camino al volcán km 15">
                </div>
                <div>
                  <label>Google Maps / ubicación exacta</label>
                  <input type="text" placeholder="Pega el link del mapa o coordenadas">
                </div>
                <div>
                  <label>Teléfono de contacto</label>
                  <input type="text" placeholder="+56 9 1234 5678">
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="contacto@tuemprendimiento.cl">
                </div>
                <div>
                  <label>Sitio web</label>
                  <input type="text" placeholder="https://tuemprendimiento.cl">
                </div>
                <div>
                  <label>Tarifa desde</label>
                  <input type="text" placeholder="Ej: Desde CLP 50.000 / noche">
                </div>
              </div>
            </article>

            <article class="form-card">
              <span class="eyebrow soft-orange"><i class="bi bi-3-circle"></i> Multimedia y RRSS</span>
              <h3 class="mt-3">Contenido visual</h3>
              <div class="form-grid">
                <div class="full">
                  <label>URLs de fotografías</label>
                  <input type="text" placeholder="https://ejemplo.com/foto-1.jpg">
                </div>
                <div>
                  <label>Instagram</label>
                  <input type="text" placeholder="@tu_cuenta o link">
                </div>
                <div>
                  <label>TikTok</label>
                  <input type="text" placeholder="@tu_cuenta o link">
                </div>
                <div class="full">
                  <label>Notas internas / equipo editorial</label>
                  <textarea
                    placeholder="Espacio útil para revisión, observaciones o recordatorios antes de publicar."></textarea>
                </div>
              </div>
            </article>

            <article class="form-card">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div>
                  <h3 class="mb-2">Acciones</h3>
                </div>
                <div class="hero-actions mt-0">
                  <a href="#" class="btn-pc-outline">Guardar borrador</a>
                  <a href="#" class="btn-pc-primary">Publicar servicio</a>
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
                    <span class="card-label">Alojamiento</span>
                    <h4>Nombre del servicio</h4>
                    <p>Comuna + tagline resumida</p>
                  </div>
                  <div class="preview-content">
                    <div class="preview-tile">
                      <strong>Descripción</strong>
                      <p class="mb-0 mt-2">Acá se ve una versión breve de la ficha que finalmente verá el turista.</p>
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
            </article>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
