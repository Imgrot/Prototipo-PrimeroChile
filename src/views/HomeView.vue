<template>
  <main>
    <section class="hero-home">
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow light"><i class="bi bi-geo-alt-fill"></i> La Araucanía, Chile</span>
          <p class="hero-copy">Tierra de volcanes activos, lagos cristalinos, bosques milenarios y cultura mapuche
            viva. La idea de este bosquejo es mantener la magia visual del sitio actual, pero con una navegación mucho
            más clara.</p>
          <div class="hero-actions">
            <RouterLink class="btn-pc-primary" to="/comunas"><i class="bi bi-signpost-split"></i> Explorar comunas
            </RouterLink>
            <RouterLink class="btn-pc-light" to="/atractivos"><i class="bi bi-stars"></i> Ver atractivos</RouterLink>
            <RouterLink class="btn-pc-light" to="/servicios"><i class="bi bi-bag-check"></i> Buscar servicios
            </RouterLink>
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
              <p>Templado lluvioso con influencia andina. Veranos suaves (15–25°C) e inviernos fríos con nieve en
                zonas de montaña (5–12°C).</p>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="info-card pc-card">
              <div class="icon-wrap icon-season"><i class="bi bi-calendar-event"></i></div>
              <h3>Mejor época</h3>
              <p>Verano para actividades al aire libre y termas. Invierno para nieve, paisajes nevados y deporte
                aventura en volcán.</p>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="info-card pc-card">
              <div class="icon-wrap icon-arrival"><i class="bi bi-airplane"></i></div>
              <h3>Cómo llegar</h3>
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
              <span class="eyebrow soft-blue"><i class="bi bi-lightbulb"></i> Base de contenido actual</span>
              <p class="mt-3">La Araucanía es una tierra mágica donde la cultura mapuche milenaria se encuentra con
                paisajes de ensueño. Volcanes activos, lagos cristalinos, bosques de araucarias centenarias y termas
                naturales conforman un destino único en el sur de Chile. Pucón, la capital de la aventura, te espera
                con actividades de adrenalina y relax, mientras que Villarrica ofrece el encanto lacustre y Temuco la
                puerta de entrada a esta región llena de historia y naturaleza.</p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="cta-panel">
              <h3>Título importante</h3>
              <p>
                Contenido importante
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- <div class="section-header">
            <span class="eyebrow soft-blue"><i class="bi bi-grid-1x2"></i> Inicio más ordenado</span>
            <h2 class="section-title">Una home que orienta, no que abruma</h2>
            <p class="section-copy">La home queda como vitrina inicial: muestra el tono, destaca lo importante y deriva
              rápido hacia páginas específicas. Eso deja más aire, mejores jerarquías y menos sensación de caos.</p>
          </div> -->

        <div class="feature-grid">
          <article class="feature-card feature-lg" style="--bg-image:url('/assets/img/scene-lake.jpg')">
            <div class="feature-card-content">
              <span class="card-label"><i class="bi bi-signpost"></i> Comunas destacadas</span>
              <h3>Explora destinos por comuna</h3>
              <p>Pucón, Villarrica, Temuco y Curarrehue con una vista dedicada, filtros laterales y tarjetas más
                respiradas para que la navegación se sienta obvia.</p>
              <div class="hero-actions mt-3">
                <RouterLink class="btn-pc-light" to="/comunas">Ir a comunas</RouterLink>
              </div>
            </div>
          </article>

          <article class="feature-card feature-sm" style="--bg-image:url('/assets/img/scene-forest.jpg')">
            <div class="feature-card-content">
              <span class="card-label"><i class="bi bi-stars"></i> Experiencias</span>
              <h3>Atractivos por tipo</h3>
              <p>Volcanes, termas, gastronomía, rutas escénicas y cultura local separados en una vista pensada para
                inspirar y filtrar.</p>
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
              <p>Cada comuna tiene su mini relato, sus imperdibles y una lista corta de razones para entrar. Así el
                usuario no tiene que adivinar por dónde empezar.</p>
              <div class="meta">
                <span class="meta-pill">Mapa</span>
                <span class="meta-pill">Imperdibles</span>
                <span class="meta-pill">Servicios cercanos</span>
              </div>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-food.svg" alt="Servicios"></div>
              <h3>Servicios con filtros de verdad</h3>
              <p>Alojamiento, gastronomía, agencias y transporte ya no viven apretados dentro de una misma home.
                Tienen su propia página con búsqueda, filtros y CTA claros.</p>
              <div class="meta">
                <span class="meta-pill">Categorías</span>
                <span class="meta-pill">Precio</span>
                <span class="meta-pill">Contacto</span>
              </div>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-comunidad.svg" alt="Comunidad"></div>
              <h3>RRSS y comunidad mejor integradas</h3>
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
        <!-- <div class="section-header">
            <span class="eyebrow soft-orange"><i class="bi bi-compass"></i> Vistas sugeridas</span>
            <h2 class="section-title">Los accesos principales salen del header, no de anclas perdidas</h2>
            <p class="section-copy">Acá se ve el tipo de contenido que viviría dentro de cada vista. La idea es que el
              usuario sepa siempre si está viendo destinos, experiencias, servicios o comunidad.</p>
          </div> -->

        <div class="row g-4">
          <div class="col-lg-6">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-aventura.svg" alt="Atractivos"></div>
              <h3>Atractivos imperdibles</h3>
              <p>Tarjetas destacadas con más aire, textos menos apretados y agrupación por experiencia: aventura,
                relax, cultura, gastronomía y panoramas familiares.</p>
              <div class="preview-actions">
                <RouterLink class="btn-pc-outline" to="/atractivos">Abrir vista</RouterLink>
              </div>
            </article>
          </div>
          <div class="col-lg-6">
            <article class="preview-card pc-card">
              <div class="thumb"><img src="/assets/img/card-hotel.svg" alt="Servicios"></div>
              <h3>Servicios turísticos</h3>
              <p>Listado limpio con categorías y contacto rápido. El usuario no debería scrollear una eternidad en la
                home para recién encontrar dónde dormir o comer.</p>
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
          <h2 class="section-title">Una forma más útil de integrar Instagram y TikTok</h2>
        </div>

        <div class="row g-4">
          <div class="col-lg-7">
            <article class="social-block pc-card h-100">
              <div class="social-header">
                <h3>Últimas publicaciones</h3>
                <div class="d-flex gap-2">
                  <button class="scroll-control" type="button" data-scroll-prev><i
                      class="bi bi-arrow-left"></i></button>
                  <button class="scroll-control" type="button" data-scroll-next><i
                      class="bi bi-arrow-right"></i></button>
                </div>
              </div>
              <div class="scroll-shell" data-scroll-shell>
                <div class="scroll-row" data-scroll-row>
                  <div class="scroll-item">
                    <div class="media-preview"><img src="/assets/img/social-instagram.svg" alt="Instagram"></div>
                  </div>
                  <div class="scroll-item">
                    <div class="media-preview"><img src="/assets/img/social-tiktok.svg" alt="TikTok"></div>
                  </div>
                  <div class="scroll-item">
                    <div class="media-preview"><img src="/assets/img/card-comunidad.svg" alt="Comunidad"></div>
                  </div>
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
                  <div class="news-date">24 JUN</div>
                  <div>
                    <h4>Nuevas rutas recomendadas para invierno</h4>
                    <p>Contenido de rutas de invierno.</p>
                  </div>
                </div>
                <div class="news-card">
                  <div class="news-date">28 JUN</div>
                  <div>
                    <h4>Termas y panoramas para fin de semana</h4>
                    <p>Contenido de rutas y recomendaciones de termas.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="row g-4 mt-1">
          <div class="col-lg-6">
            <article class="social-block pc-card h-100">
              <div class="social-header">
                <h3>Galería comunitaria</h3>
                <span class="small-badge"><i class="bi bi-people"></i> Fotos reales de visitantes</span>
              </div>
              <div class="gallery-grid">
                <div class="gallery-item primary"><img src="/assets/img/card-rutas.svg" alt="Galería"><span
                    class="avatar">AM</span></div>
                <div class="gallery-item"><img src="/assets/img/card-termas.svg" alt="Galería"><span
                    class="avatar">JP</span></div>
                <div class="gallery-item"><img src="/assets/img/card-aventura.svg" alt="Galería"><span
                    class="avatar">CL</span></div>
                <div class="gallery-item"><img src="/assets/img/card-cultura.svg" alt="Galería"><span
                    class="avatar">MN</span></div>
                <div class="gallery-item"><img src="/assets/img/card-hotel.svg" alt="Galería"><span
                    class="avatar">RS</span></div>
              </div>
            </article>
          </div>
          <div class="col-lg-6">
            <article class="cta-panel h-100 d-flex flex-column justify-content-between">
              <div>
                <h3>Módulo de autogestión para emprendedores</h3>
                <p>
                  Contenido relevante para la autogestión de publicaciones para emprendedores.
                </p>
              </div>
              <div class="hero-actions mt-4">
                <RouterLink class="btn-pc-orange" to="/emprendedores"><i class="bi bi-speedometer2"></i> Ver panel
                  sugerido</RouterLink>
                <RouterLink class="btn-pc-light" to="/publicar-servicio"><i class="bi bi-plus-circle"></i> Ver
                  formulario</RouterLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
