<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer mt-5">
    <div class="footer-top">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="footer-brand">
              <img src="/assets/img/logo-pc.jpg" alt="PrimeroChile" />
              <div>
                <h4>PrimeroChile</h4>
                <p>
                  Una propuesta más ordenada para descubrir La Araucanía sin cargar toda la
                  experiencia en una sola vista infinita.
                </p>
                <div class="footer-social mt-3">
                  <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                  <a href="#" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                  <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <h4>Explora</h4>
            <ul class="footer-list">
              <li>
                <RouterLink to="/comunas">Comunas</RouterLink>
              </li>
              <li>
                <RouterLink to="/atractivos">Atractivos</RouterLink>
              </li>
              <li>
                <RouterLink to="/servicios">Servicios</RouterLink>
              </li>
              <li>
                <RouterLink to="/comunidad">Comunidad</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-3">
            <h4>Para emprendedores</h4>
            <ul class="footer-list">
              <li>
                <RouterLink to="/emprendedores">Panel sugerido</RouterLink>
              </li>
              <li>
                <RouterLink to="/publicar-servicio">Publicar servicio</RouterLink>
              </li>
              <li><a href="#">Beneficios</a></li>
              <li><a href="#">Contacto comercial</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {{ currentYear }} PrimeroChile — prototipo migrado a Vue 3.</span>
      </div>
    </div>
  </footer>
</template>
