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
                <label class="check-chip"><input type="checkbox" checked> <span>Hotel</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Cabaña</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Hostal</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Gastronomía</span></label>
                <label class="check-chip"><input type="checkbox" checked> <span>Agencia</span></label>
              </div>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-section">
              <h4 class="sidebar-title">Presupuesto</h4>
              <div class="tag-row">
                <span class="small-badge">Económico</span>
                <span class="small-badge">Medio</span>
                <span class="small-badge">Premium</span>
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
                <input type="text" placeholder="Buscar servicio, comuna o especialidad...">
              </div>
              <div class="toolbar-actions">
                <RouterLink class="btn-pc-outline" to="/publicar-servicio"><i class="bi bi-plus-circle"></i> Publicar
                </RouterLink>
                <RouterLink class="btn-pc-primary" to="/comunidad"><i class="bi bi-instagram"></i> Ver comunidad
                </RouterLink>
              </div>
            </div>

            <section>
              <div class="service-tabs" data-filter-group data-filter-target="[data-filter-item]">
                <button type="button" class="service-tab active" data-filter-button="all">Todos</button>
                <button type="button" class="service-tab" data-filter-button="alojamiento">Alojamiento</button>
                <button type="button" class="service-tab" data-filter-button="gastronomia">Gastronomía</button>
                <button type="button" class="service-tab" data-filter-button="agencia">Agencias</button>
                <button type="button" class="service-tab" data-filter-button="transporte">Transporte</button>
              </div>

              <div class="service-grid">
                <article class="service-card" data-filter-item="alojamiento" style="--service-accent:#2563eb">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Hotel & Spa Antumalal</h3>
                    <span class="small-badge">Hotel</span>
                  </div>
                  <p>Hotel histórico con spa, piscina natural y vista privilegiada. El contenido respira más y ya no
                    va aplastado en un grid eterno.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-cash"></i> Desde CLP 280.000 / noche</div>
                    <div><i class="bi bi-telephone"></i> +56 45 244 1000</div>
                    <div><i class="bi bi-geo-alt"></i> Camino a Villarrica km 2, Pucón</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Contactar</a>
                    <a href="#" class="btn-pc-outline">Web</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="alojamiento" style="--service-accent:#2563eb">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Hotel Lago Calafquén</h3>
                    <span class="small-badge">Hotel</span>
                  </div>
                  <p>Hotel frente al lago con habitaciones familiares, restaurante y acceso directo a la playa. Ideal
                    para familias o escapadas más tranquilas.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-cash"></i> Desde CLP 75.000 / noche</div>
                    <div><i class="bi bi-telephone"></i> +56 45 243 1000</div>
                    <div><i class="bi bi-geo-alt"></i> Costanera Licán Ray</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Contactar</a>
                    <a href="#" class="btn-pc-outline">Web</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="alojamiento" style="--service-accent:#f97316">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Cabañas Tunkelén</h3>
                    <span class="small-badge">Cabaña</span>
                  </div>
                  <p>Cabañas con cocina equipada, chimenea y vista al lago. Acá la ficha puede priorizar capacidad,
                    equipamiento y fotos.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-cash"></i> Desde CLP 90.000 / noche</div>
                    <div><i class="bi bi-telephone"></i> +56 45 244 2600</div>
                    <div><i class="bi bi-geo-alt"></i> Camino Villarrica km 13</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Contactar</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="alojamiento" style="--service-accent:#a855f7">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Hostal Melipeuco</h3>
                    <span class="small-badge">Hostal</span>
                  </div>
                  <p>Opción más económica y simple, con tours y atención local. La separación por categoría ayuda
                    mucho a comparar.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-cash"></i> Desde CLP 20.000 / noche</div>
                    <div><i class="bi bi-telephone"></i> +56 9 4444 3333</div>
                    <div><i class="bi bi-geo-alt"></i> Melipeuco centro</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Contactar</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="gastronomia" style="--service-accent:#ea580c">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Cocina de Campo Rayén</h3>
                    <span class="small-badge">Gastronomía</span>
                  </div>
                  <p>Restaurante de cocina local, ideal para empezar una futura ficha con platos recomendados,
                    horarios y reserva directa.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-cash"></i> Ticket promedio CLP 12.000</div>
                    <div><i class="bi bi-clock"></i> Mar–Dom / 12:30–22:00</div>
                    <div><i class="bi bi-geo-alt"></i> Pucón centro</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Reservar</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="agencia" style="--service-accent:#0ea5e9">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Andes Aventura</h3>
                    <span class="small-badge">Agencia</span>
                  </div>
                  <p>Agencia para rafting, canopy y ascensos guiados. Mucho más fácil vender esto con una ficha
                    dedicada que escondido entre alojamientos.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-shield-check"></i> Operadores certificados</div>
                    <div><i class="bi bi-telephone"></i> +56 9 7777 3333</div>
                    <div><i class="bi bi-geo-alt"></i> Pucón / Villarrica</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Contactar</a>
                    <a href="#" class="btn-pc-outline">Ver tours</a>
                  </div>
                </article>

                <article class="service-card" data-filter-item="transporte" style="--service-accent:#475569">
                  <div class="d-flex justify-content-between gap-2 align-items-start">
                    <h3>Rent a Car SurActivo</h3>
                    <span class="small-badge">Transporte</span>
                  </div>
                  <p>Arriendo de vehículos para recorrer comunas y rutas cercanas. En un siguiente paso esto puede
                    cruzarse con mapa y disponibilidad.</p>
                  <div class="service-meta">
                    <div><i class="bi bi-car-front"></i> Compacto, SUV y camioneta</div>
                    <div><i class="bi bi-telephone"></i> +56 9 8888 1111</div>
                    <div><i class="bi bi-geo-alt"></i> Aeropuerto / Temuco</div>
                  </div>
                  <div class="service-actions">
                    <a href="#" class="btn-pc-primary">Cotizar</a>
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
                      <p class="mb-0 mt-1">Implementación de un minimapa con estimaciones de distancia a futuro.</p>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-5">
                    <article class="pc-card p-4 h-100">
                      <span class="eyebrow soft-orange"><i class="bi bi-tools"></i> Qué mejora</span>
                      <h3 class="mt-3" style="color:var(--pc-ink); font-weight:800;">Menos cansancio visual, más
                        decisión rápida</h3>
                      <p class="mb-0">Servicios del usuario.</p>
                    </article>
                  </div> -->
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
