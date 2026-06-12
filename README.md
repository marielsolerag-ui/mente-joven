# Mente Joven 🧠💜

Sitio web educativo sobre salud mental, autoestima, estrés académico y presión social para estudiantes de secundaria.

## Estructura del proyecto

```
mente-joven/
├── index.html      # Página principal
├── css/
│   └── style.css   # Todos los estilos
├── js/
│   └── script.js   # Interactividad (tests, encuestas, buzón, frases)
└── README.md
```

No se requieren imágenes externas: la ilustración del hero es un SVG embebido directamente en el HTML.

## Cómo publicar en Netlify

### Opción 1: Arrastrar y soltar (más rápido)
1. Ve a [app.netlify.com](https://app.netlify.com) e inicia sesión.
2. En el panel principal, busca la zona que dice **"Drag and drop your site output folder here"**.
3. Arrastra la **carpeta `mente-joven`** completa (no un .zip, la carpeta descomprimida).
4. Netlify la subirá y te dará una URL pública en segundos (algo como `https://random-name-123.netlify.app`).
5. Puedes cambiar el nombre del sitio en **Site settings → Change site name**.

### Opción 2: Desde GitHub (recomendado para actualizaciones futuras)
1. Sube esta carpeta a un repositorio de GitHub.
2. En Netlify, clic en **"Add new site" → "Import an existing project"**.
3. Conecta tu cuenta de GitHub y selecciona el repositorio.
4. Build command: deja vacío. Publish directory: `/` (raíz).
5. Clic en **Deploy site**.

## Notas
- Todo funciona sin backend: los tests, encuestas y el buzón anónimo se procesan con JavaScript en el navegador (no se guardan datos permanentemente ni se envían a ningún servidor).
- Si quieres que el buzón anónimo guarde mensajes de verdad, necesitarías conectar un servicio externo (por ejemplo, un formulario de Netlify Forms, Google Forms, o una base de datos).
