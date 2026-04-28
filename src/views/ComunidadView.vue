<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-blue"><i class="bi bi-people"></i> Vista separada</span>
        <h1 class="section-title mt-3">Comunidad, noticias y RRSS integradas</h1>
        <p class="section-copy mb-0">Una buena idea es agrupar la sección de comunidad con las redes sociales y las
          noticias de los destinos. Esto puede terminar siendo múltiples carruseles para cuentas recomendadas, por
          comuna o por hashtag</p>
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
                  <h3>Hub social</h3>
                  <p>Noticias, galería y RRSS.</p>
                </div>
              </div>
              <button class="sidebar-toggle" data-sidebar-toggle type="button">
                <i class="bi bi-layout-sidebar-inset"></i>
              </button>
            </div>
            <div class="sidebar-divider"></div>
            <div class="sidebar-section">
              <a class="sidebar-link active" href="#social"><i class="bi bi-instagram"></i> <span
                  class="sidebar-text">RRSS</span></a>
              <a class="sidebar-link" href="#noticias"><i class="bi bi-newspaper"></i> <span
                  class="sidebar-text">Noticias</span></a>
              <a class="sidebar-link" href="#galeria"><i class="bi bi-images"></i> <span
                  class="sidebar-text">Galería</span></a>
              <a class="sidebar-link" href="#agenda"><i class="bi bi-calendar3"></i> <span
                  class="sidebar-text">Agenda</span></a>
            </div>
          </aside>

          <div class="page-content-grid">
            <section id="social" class="feed-grid">
              <article class="community-card">
                <div class="social-header">
                  <h3>Instagram del destino / emprendedor</h3>
                  <span class="small-badge">Placeholder carrusel</span>
                </div>
                <div class="media-preview">
                  <img src="/assets/img/social-instagram.svg" alt="Instagram">
                </div>
                <p class="mt-3 mb-0">Puede mostrar tanto como las últimas publicaciones, como las recomendadas, o las
                  más populares.</p>
              </article>

              <article class="community-card">
                <div class="social-header">
                  <h3>TikTok con clips útiles</h3>
                  <span class="small-badge">Placeholder reels</span>
                </div>
                <div class="media-preview">
                  <img src="/assets/img/social-tiktok.svg" alt="TikTok">
                </div>
                <p class="mt-3 mb-0">Puede mostrar tanto como las últimas publicaciones, como las recomendadas, o las
                  más populares.</p>
              </article>
            </section>

            <section id="noticias" class="row g-4">
              <div class="col-lg-7">
                <article class="community-card h-100">
                  <div class="social-header">
                    <h3>Sección de noticias</h3>
                    <span class="small-badge">Editorial</span>
                  </div>
                  <div class="news-list">
                    <div class="news-card">
                      <div class="news-date">05 JUL</div>
                      <div>
                        <h4>Nuevas rutas recomendadas para invierno</h4>
                        <p>Bloque pensado para noticias breves, eventos, actualizaciones turísticas o campañas
                          estacionales.</p>
                      </div>
                    </div>
                    <div class="news-card">
                      <div class="news-date">11 JUL</div>
                      <div>
                        <h4>Mapa de termas abiertas durante la semana</h4>
                        <p>Acá el contenido editorial ya no le compite a los hoteles ni a los atractivos. Vive donde
                          corresponde.</p>
                      </div>
                    </div>
                    <div class="news-card">
                      <div class="news-date">15 JUL</div>
                      <div>
                        <h4>Panoramas familiares para vacaciones de invierno</h4>
                        <p>Ideal para empujar atractivo + servicio + agenda sin saturar la home.</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-lg-5">
                <article id="agenda" class="community-card h-100">
                  <div class="social-header">
                    <h3>Agenda rápida</h3>
                    <span class="small-badge">Eventos</span>
                  </div>
                  <div class="table-like">
                    <div class="news-card">
                      <div class="news-date">18 JUL</div>
                      <div>
                        <h4>Feria local en Temuco</h4>
                        <p>Una tarjeta simple, con link posterior a detalle.</p>
                      </div>
                    </div>
                    <div class="news-card">
                      <div class="news-date">21 JUL</div>
                      <div>
                        <h4>Festival gastronómico</h4>
                        <p>Perfecto para unir comunidad con servicios y turismo.</p>
                      </div>
                    </div>
                    <div class="news-card">
                      <div class="news-date">26 JUL</div>
                      <div>
                        <h4>Salida guiada al volcán</h4>
                        <p>CTA futuro a reservas, cupos o calendario reactivo.</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section id="galeria" class="row g-4">
              <div class="col-lg-8">
                <article class="community-card h-100">
                  <div class="social-header">
                    <h3>Galería comunitaria</h3>
                    <span class="small-badge">UGC</span>
                  </div>
                  <div class="gallery-grid">
                    <div class="gallery-item primary"><img src="/assets/img/card-rutas.svg" alt="Galería"><span
                        class="avatar">SM</span></div>
                    <div class="gallery-item"><img src="/assets/img/card-aventura.svg" alt="Galería"><span
                        class="avatar">LT</span></div>
                    <div class="gallery-item"><img src="/assets/img/card-termas.svg" alt="Galería"><span
                        class="avatar">AG</span></div>
                    <div class="gallery-item"><img src="/assets/img/card-cultura.svg" alt="Galería"><span
                        class="avatar">VC</span></div>
                    <div class="gallery-item"><img src="/assets/img/card-hotel.svg" alt="Galería"><span
                        class="avatar">PR</span></div>
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
