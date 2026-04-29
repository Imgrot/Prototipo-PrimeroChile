<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow soft-orange"><i class="bi bi-shop"></i> Inspirado en el primer bosquejo</span>
        <h1 class="section-title mt-3">Panel de emprendedores o Administrador.</h1>
      </div>
    </section>

    <section class="section section-tight pt-0">
      <div class="container">
        <div class="dashboard-shell">
          <aside class="dashboard-sidebar">
            <div class="sidebar-brand mb-3">
              <img src="/assets/img/logo-pc.jpg" alt="Logo">
              <div class="sidebar-brand-copy">
                <h3 class="text-white">Mi panel</h3>
                <p class="text-white-50 mb-0">Auto gestión para emprendedores</p>
              </div>
            </div>
            <nav class="dashboard-nav d-grid gap-1">
              <a href="#" class="active"><i class="bi bi-grid-1x2"></i> Resumen</a>
              <a href="#"><i class="bi bi-card-list"></i> Mis publicaciones</a>
              <a href="#"><i class="bi bi-envelope"></i> Mensajes</a>
              <a href="#"><i class="bi bi-instagram"></i> Redes sociales</a>
              <a href="#"><i class="bi bi-person"></i> Perfil</a>
              <RouterLink to="/publicar-servicio"><i class="bi bi-plus-circle"></i> Crear nueva</RouterLink>
            </nav>
          </aside>

          <div class="dashboard-main">
            <div class="dashboard-banner">
              <h2>Módulo de autogestión para emprendedores o admin.</h2>
              <p class="mb-0 mt-2">Aquí es posible ver el estado de sus publicaciones y la actividad en las redes sociales, además de monitorear el alcance generado directamente por la página; tales como los clicks.</p>
            </div>

            <div class="stats-grid">
              <article class="stat-card">
                <div class="label">Publicaciones activas</div>
                <div class="value">12</div>
                <div class="trend">+3 esta semana</div>
              </article>
              <article class="stat-card">
                <div class="label">Mensajes pendientes</div>
                <div class="value">7</div>
                <div class="trend">Responder hoy</div>
              </article>
              <article class="stat-card">
                <div class="label">Clicks desde RRSS</div>
                <div class="value">328</div>
                <div class="trend">Instagram lidera</div>
              </article>
              <article class="stat-card">
                <div class="label">Ficha con mejor rendimiento</div>
                <div class="value">Volcán Tolhuaca</div>
                <div class="trend">CTR +12%</div>
              </article>
            </div>

            <div class="dashboard-grid">
              <section class="dashboard-panel span-8">
                <h3>Mis publicaciones recientes</h3>
                <div class="table-like">
                  <div class="table-row">
                    <div>
                      <strong>Senderismo en Volcán Tolhuaca</strong>
                      <span class="d-block">Ficha enfocada en experiencia aventura.</span>
                    </div>
                    <span>Publicada</span>
                    <span>1.250 vistas</span>
                    <a class="btn-pc-outline" href="#">Editar</a>
                  </div>
                  <div class="table-row">
                    <div>
                      <strong>Artesanía local</strong>
                      <span class="d-block">Experiencia cultural con venta directa.</span>
                    </div>
                    <span>Revisión</span>
                    <span>430 vistas</span>
                    <a class="btn-pc-outline" href="#">Ver</a>
                  </div>
                  <div class="table-row">
                    <div>
                      <strong>Cabalgata al atardecer</strong>
                      <span class="d-block">Contenido listo para reforzar con RRSS.</span>
                    </div>
                    <span>Borrador</span>
                    <span>—</span>
                    <a class="btn-pc-outline" href="#">Completar</a>
                  </div>
                </div>
              </section>

              <section class="dashboard-panel span-4">
                <h3>Mensajes nuevos</h3>
                <div class="news-list">
                  <div class="news-card">
                    <div class="news-date">Hoy</div>
                    <div>
                      <h4>Consulta por disponibilidad</h4>
                      <p>Interés en tour familiar para fin de semana.</p>
                    </div>
                  </div>
                  <div class="news-card">
                    <div class="news-date">Ayer</div>
                    <div>
                      <h4>Solicitud de tarifa grupal</h4>
                      <p>Perfecto para un futuro CRM simple dentro del panel.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section class="dashboard-panel span-6">
                <h3>Vista previa de Instagram / reels</h3>
                <div class="social-embed">
                  <img src="/assets/img/social-instagram.svg" alt="Instagram">
                </div>
              </section>

              <section class="dashboard-panel span-6">
                <h3>Vista previa del TikTok / reels</h3>
                <div class="social-embed">
                  <img src="/assets/img/social-tiktok.svg" alt="TikTok">
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
