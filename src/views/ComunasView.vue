<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-blue"><i class="bi bi-signpost"></i> Vista separada</span>
        <h1 class="section-title mt-3">Comunas destacadas, con más contexto y menos ruido</h1>
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
              <a class="sidebar-link active" href="#destacadas"><i class="bi bi-stars"></i> <span
                  class="sidebar-text">Destacadas</span></a>
              <a class="sidebar-link" href="#rutas"><i class="bi bi-map"></i> <span class="sidebar-text">Rutas
                  sugeridas</span></a>
              <a class="sidebar-link" href="#planifica"><i class="bi bi-bag-check"></i> <span
                  class="sidebar-text">Planifica tu viaje</span></a>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Tipo de experiencia</h4>
              <div class="check-stack">
                <label class="check-chip"><input type="checkbox" checked> <span>Aventura</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Cultura mapuche</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Relax y termas</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Familiar</span></label>
              </div>
            </div>
          </aside>

          <div>
            <div class="content-toolbar">
              <div class="toolbar-search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Buscar comuna, experiencia o imperdible...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/atractivos"><i class="bi bi-stars"></i> Ver atractivos
                </RouterLink>
                <RouterLink class="btn-pc-primary" to="/servicios"><i class="bi bi-bag-check"></i> Servicios cercanos
                </RouterLink>
              </div>
            </div>

            <section id="destacadas" class="page-content-grid">
              <div class="results-grid">
                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-rutas.svg" alt="Pucón"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="eyebrow soft-orange"><i class="bi bi-fire"></i> Aventura</span>
                        <h3 class="mt-2">Pucón</h3>
                        <p>Capital de la aventura, termas y lago. Perfecta para vender actividades con storytelling
                          más claro.</p>
                      </div>
                      <span class="small-badge">Prioritaria</span>
                    </div>
                    <ul class="card-list">
                      <li><i class="bi bi-star-fill"></i> Volcán Villarrica, rafting y termas geotérmicas.</li>
                      <li><i class="bi bi-star-fill"></i> Buena comuna para concentrar adrenalina, relajo y servicios
                        turísticos.</li>
                      <li><i class="bi bi-star-fill"></i> Puede enlazar a atractivos y alojamientos específicos.</li>
                    </ul>
                    <div class="preview-actions mt-4">
                      <RouterLink class="btn-pc-outline" to="/atractivos">Ver atractivos de Pucón</RouterLink>
                    </div>
                  </div>
                </article>

                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-cultura.svg" alt="Temuco"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="eyebrow soft-blue"><i class="bi bi-buildings"></i> Ciudad base</span>
                        <h3 class="mt-2">Temuco</h3>
                        <p>Puerta de entrada a la región, ideal para mercado local, cultura, gastronomía y servicios
                          urbanos.</p>
                      </div>
                      <span class="small-badge">Acceso principal</span>
                    </div>
                    <ul class="card-list">
                      <li><i class="bi bi-star-fill"></i> Mercado Municipal, cultura mapuche y conectividad.</li>
                      <li><i class="bi bi-star-fill"></i> Puede contener noticias, agenda y mapas urbanos.</li>
                      <li><i class="bi bi-star-fill"></i> Buen punto para orientar al turista antes de seguir viaje.
                      </li>
                    </ul>
                    <div class="preview-actions mt-4">
                      <RouterLink class="btn-pc-outline" to="/servicios">Servicios en Temuco</RouterLink>
                    </div>
                  </div>
                </article>

                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-termas.svg" alt="Villarrica"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="eyebrow soft-blue"><i class="bi bi-water"></i> Lacustre</span>
                        <h3 class="mt-2">Villarrica</h3>
                        <p>Lago, costanera y vida tranquila. Tiene onda distinta a Pucón, así que conviene mostrarla
                          con identidad propia.</p>
                      </div>
                      <span class="small-badge">Relax</span>
                    </div>
                    <ul class="card-list">
                      <li><i class="bi bi-star-fill"></i> Playas, costanera, casino y vista al volcán.</li>
                      <li><i class="bi bi-star-fill"></i> Atractiva para familias y viajes más calmados.</li>
                      <li><i class="bi bi-star-fill"></i> Puede enlazar a gastronomía y hoteles frente al lago.</li>
                    </ul>
                  </div>
                </article>

                <article class="pc-card listing-card">
                  <div class="cover"><img src="/assets/img/card-comunidad.svg" alt="Curarrehue"></div>
                  <div class="card-body">
                    <div class="card-topline">
                      <div>
                        <span class="eyebrow soft-orange"><i class="bi bi-tree"></i> Naturaleza viva</span>
                        <h3 class="mt-2">Curarrehue</h3>
                        <p>Territorio mapuche y rutas de borde cordillerano. Da para una vista más íntima y menos
                          comercial.</p>
                      </div>
                      <span class="small-badge">Cultural</span>
                    </div>
                    <ul class="card-list">
                      <li><i class="bi bi-star-fill"></i> Acceso al Lanín, termas y experiencias locales.</li>
                      <li><i class="bi bi-star-fill"></i> Ideal para turismo responsable y experiencias guiadas.</li>
                      <li><i class="bi bi-star-fill"></i> Acá la comunidad y el relato importan harto.</li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            <section id="rutas" class="mt-4">
              <div class="section-header text-start mx-0 mb-3">
                <span class="eyebrow soft-blue"><i class="bi bi-map"></i> Bloque extra</span>
                <h2 class="section-title mb-2" style="font-size:2rem">Rutas sugeridas por intención</h2>
                <p class="section-copy">Recomendaciones según la intención del viajero.</p>
              </div>
              <div class="row g-4">
                <div class="col-xl-4">
                  <article class="preview-card pc-card">
                    <div class="thumb"><img src="/assets/img/card-aventura.svg" alt="Ruta aventura"></div>
                    <h3>Ruta aventura volcán + río</h3>
                    <p>Una navegación tipo “quiero adrenalina” funciona mucho mejor acá que perdida en la home.</p>
                    <ul>
                      <li>Pucón</li>
                      <li>Volcán Villarrica</li>
                      <li>Rafting Río Trancura</li>
                    </ul>
                  </article>
                </div>
                <div class="col-xl-4">
                  <article class="preview-card pc-card">
                    <div class="thumb"><img src="/assets/img/card-termas.svg" alt="Ruta relax"></div>
                    <h3>Ruta termas y descanso</h3>
                    <p>Otra ruta puede estar orientada a descanso, con servicios cercanos y tiempos de traslado más
                      claros.</p>
                    <ul>
                      <li>Villarrica</li>
                      <li>Termas del sur</li>
                      <li>Cabañas y spas</li>
                    </ul>
                  </article>
                </div>
                <div class="col-xl-4">
                  <article class="preview-card pc-card">
                    <div class="thumb"><img src="/assets/img/card-cultura.svg" alt="Ruta cultura"></div>
                    <h3>Ruta cultura local</h3>
                    <p>Relato, gastronomía y cultura mapuche pueden tener una ruta editorial propia, mucho más valiosa
                      que un grid genérico.</p>
                    <ul>
                      <li>Temuco</li>
                      <li>Mercado Municipal</li>
                      <li>Experiencias locales</li>
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            <section id="planifica" class="mt-4">
              <div class="map-placeholder">
                <div class="inner">
                  <strong>Mapa / módulo de planificación</strong>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
