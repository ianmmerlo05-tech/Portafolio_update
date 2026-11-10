# Portafolio de Ian Montes Merlo

Portafolio personal construido con Vite y LESS. La compilación de producción minifica los estilos y utiliza PurgeCSS para eliminar reglas que no se usan.

## Desarrollo local

Requiere Node.js y npm.

```sh
npm install
npm run dev
```

Para generar la versión de producción en `dist/`:

```sh
npm run build
```

El flujo de GitHub Actions en `.github/workflows/deploy.yml` compila y publica automáticamente en GitHub Pages al actualizar la rama `main`.
