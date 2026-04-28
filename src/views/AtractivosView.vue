<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-orange"><i class="bi bi-stars"></i> Vista separada</span>
        <h1 class="section-title mt-3">Atractivos imperdibles, agrupados por experiencia</h1>
        <p class="section-copy mb-0">
          Esta página separa parte del contenido apretado en la vista principal.
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
                <label class="check-chip"><input type="checkbox" checked> <span>Volcanes</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Termas</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Playas y lagos</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Cultura</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Gastronomía</span></label>
              </div>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Nivel</h4>
              <div class="tag-row">
                <span class="small-badge">Familiar</span>
                <span class="small-badge">Aventura</span>
                <span class="small-badge">Todo el año</span>
                <span class="small-badge">Con guía</span>
              </div>
            </div>

            <!-- <div class="sidebar-divider"></div>

          <div class="sidebar-section">
            <h4 class="sidebar-title">Notas</h4>
            <small class="inline-note">Esta página deja más espacio para fotografía grande, tips cortos, CTA útiles y tarjetas menos aplastadas.</small>
          </div> -->
          </aside>

          <div>
            <div class="content-toolbar">
              <div class="toolbar-search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Buscar atractivo, comuna o tipo de panorama...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/comunas">Ver comunas</RouterLink>
                <RouterLink class="btn-pc-primary" to="/servicios">Ver servicios relacionados</RouterLink>
              </div>
            </div>

            <section class="page-content-grid">
              <div class="row g-4">
                <div class="col-xl-4">
                  <article class="preview-card pc-card h-100">
                    <div class="thumb"><img src="/assets/img/card-cultura.svg" alt="Mercado Municipal"></div>
                    <h3>Mercado Municipal de Temuco</h3>
                    <p>Tradición, gastronomía mapuche, productos locales y platos típicos. Acá caben relatos cortos,
                      info útil y CTA sin meter un bloque kilométrico.</p>
                    <div class="meta">
                      <span class="meta-pill">Mercado</span>
                      <span class="meta-pill">Gratis</span>
                      <span class="meta-pill">08:00–18:00</span>
                    </div>
                  </article>
                </div>
                <div class="col-xl-4">
                  <article class="preview-card pc-card h-100">
                    <div class="thumb"><img src="/assets/img/card-aventura.svg" alt="Volcán Villarrica"></div>
                    <h3>Volcán Villarrica</h3>
                    <p>Uno de los volcanes más activos de Sudamérica y uno de los grandes ganchos visuales del
                      destino. Perfecto para hero internos y tarjetas premium.</p>
                    <div class="meta">
                      <span class="meta-pill">Volcán</span>
                      <span class="meta-pill">Con guía</span>
                      <span class="meta-pill">Salida AM</span>
                    </div>
                  </article>
                </div>
                <div class="col-xl-4">
                  <article class="preview-card pc-card h-100">
                    <div class="thumb"><img src="/assets/img/card-rutas.svg" alt="Rafting"></div>
                    <h3>Rafting Río Trancura</h3>
                    <p>Experiencia fuerte para público aventura. Acá funciona bien una tarjeta enfocada en intensidad,
                      rango de precios, horarios y requisitos.</p>
                    <div class="meta">
                      <span class="meta-pill">Aventura</span>
                      <span class="meta-pill">CLP 35.000+</span>
                      <span class="meta-pill">Varios horarios</span>
                    </div>
                  </article>
                </div>
              </div>

              <div class="section-header text-start mx-0 mt-3 mb-2">
                <span class="eyebrow soft-blue"><i class="bi bi-images"></i> Más lugares</span>
                <h2 class="section-title mb-2" style="font-size:2rem">Explora por tipo de experiencia</h2>
                <p class="section-copy">El bloque actual puede respirar mejor si se transforma en tarjetas grandes con
                  una sola idea cada una.</p>
              </div>

              <div class="results-grid">
                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-rutas.svg" alt="Paso fronterizo"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="small-badge">Ruta escénica</span>
                        <h3 class="mt-2">Paso Fronterizo Mamuil Malal</h3>
                        <p>Camino de borde cordillerano con una de las postales más lindas para vender en la narrativa
                          del sitio.</p>
                      </div>
                    </div>
                    <p class="mb-0">Sirve para mostrar duración del trayecto, recomendaciones climáticas y servicios
                      cercanos.</p>
                  </div>
                </article>
                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-termas.svg" alt="Termas"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="small-badge">Relax</span>
                        <h3 class="mt-2">Termas de San Luis</h3>
                        <p>Piscinas, bosque nativo y descanso. Perfecta para una tarjeta con fotos más limpias y
                          beneficios claros.</p>
                      </div>
                    </div>
                    <p class="mb-0">Acá puede salir rango de precios, temporada ideal, reservas y links a alojamientos
                      cercanos.</p>
                  </div>
                </article>
                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-food.svg" alt="Gastronomía"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="small-badge">Sabores locales</span>
                        <h3 class="mt-2">Ruta gastronómica</h3>
                        <p>En la home actual esto queda perdido. Acá puede vivir como sección editorial con
                          recomendaciones reales.</p>
                      </div>
                    </div>
                    <p class="mb-0">Ideal para restaurantes, ferias, platos típicos y experiencias con identidad
                      local.</p>
                  </div>
                </article>
                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-comunidad.svg" alt="Cultura"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="small-badge">Cultura</span>
                        <h3 class="mt-2">Experiencias comunitarias</h3>
                        <p>Bloque útil para artesanía, talleres, cultura mapuche y turismo responsable, sin competir
                          con hotelería o noticias.</p>
                      </div>
                    </div>
                    <p class="mb-0">También se puede conectar con el feed social para mostrar contenido real de
                      visitantes o anfitriones.</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
