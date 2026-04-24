# Urban Threads React

Migración de la tienda de ropa urbana **Urban Threads** de HTML/JS puro a React, replicando fielmente el diseño de [maquetacion-dos.netlify.app](https://maquetacion-dos.netlify.app/).

## Stack

| Tecnología | Versión |
|---|---|
| React | 19 |
| React Router DOM | 7 |
| Vite | 8 |
| CSS plano | — |

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/danniebravo/migracion_maquetacion_dos.git
cd migracion_maquetacion_dos

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Otros scripts

```bash
npm run build    # Genera el build de producción en /dist
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta ESLint
```

## Estructura del proyecto

```
src/
├── assets/              # Recursos estáticos
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── FeatureCard.jsx / .css
│   ├── ProductCard.jsx / .css
│   ├── ContactInfo.jsx / .css
│   ├── ContactForm.jsx / .css
│   └── Footer.jsx / .css
├── data/
│   └── products.js      # Catálogo de productos
├── pages/               # Páginas de la aplicación
│   ├── Home.jsx / .css
│   ├── Nosotros.jsx / .css
│   ├── Productos.jsx / .css
│   ├── Contacto.jsx / .css
│   └── NotFound.jsx
└── routes/
    └── AppRouter.jsx    # Configuración de rutas
```

## Páginas y rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Hero, features y productos destacados |
| `/nosotros` | Nosotros | Historia, estadísticas y valores de marca |
| `/productos` | Productos | Catálogo completo con filtros por categoría |
| `/contacto` | Contacto | Formulario con validación y mapa de contacto |
| `*` | NotFound | Página 404 |

## Funcionalidades

- Navegación con React Router DOM y NavLink activo
- Menú hamburguesa funcional en mobile
- Catálogo de productos filtrable por categoría (Todos / Ropa / Calzado / Accesorios)
- Formulario de contacto con:
  - Validación campo a campo
  - Mensajes de error inline
  - Guardado en `localStorage` bajo la clave `urban_threads_mensajes`
  - Confirmación visual al enviar
- Footer con links de navegación y redes sociales
- Diseño responsive (mobile-first)

## Autor

**danniebravo** — [GitHub](https://github.com/danniebravo)
