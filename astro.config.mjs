// @ts-check
import { defineConfig } from 'astro/config';

// Configuración para despliegue en GitHub Pages.
// El sitio se publica en https://breiyer.github.io/blog-gamificacion
export default defineConfig({
  site: 'https://breiyer.github.io',
  base: '/blog-gamificacion',
  build: {
    // Genera URLs con barra final para máxima compatibilidad con GitHub Pages
    format: 'directory',
  },
});
