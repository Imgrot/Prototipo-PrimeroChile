# PrimeroChile Vue

Base Vue 3 migrada desde el prototipo HTML de PrimeroChile.

## Estructura aplicada

- `src/layouts/MainLayout.vue`: layout principal con header, contenido y footer.
- `src/components/layout`: componentes visuales comunes del layout.
- `src/views`: vistas separadas por ruta.
- `src/router`: rutas de la aplicación.
- `src/composables`: lógica reusable para preferencias de accesibilidad e interacciones heredadas del prototipo.
- `src/constants`: navegación y constantes de interfaz.
- `src/helpers`: utilidades pequeñas.
- `public/assets`: imágenes estáticas del prototipo.

## Comandos

```sh
npm install
npm run dev
npm run build
```

## Nota de migración

Esta versión conserva el contenido estático del prototipo HTML, pero lo deja montado sobre Vue Router, layout reutilizable, controles de accesibilidad persistentes en `localStorage` y un composable puente para las interacciones por `data-*`. La conexión con APIs puede hacerse después reemplazando los bloques estáticos por componentes y datos reales.
