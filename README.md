# Sabores y Raíces Catrachas - Sitio Web de Turismo

Un sitio web moderno e interactivo dedicado al turismo cultural y gastronómico de Honduras, específicamente enfocado en La Paz, Intibucá y Copán.

## 🌿 Características

✨ **Diseño Moderno y Responsivo**
- Interfaz completa adaptada para desktop, tablet y móvil
- Animaciones suaves y transiciones elegantes
- Paleta de colores inspirada en la naturaleza hondureña

🏔️ **Secciones Principales**
1. **Navbar** - Navegación sticky con menú responsive y botón "Planear Ruta"
2. **Hero** - Sección de bienvenida con imagen de fondo y CTA botones
3. **Destinos** - Cards con información sobre La Paz, Intibucá y Copán
4. **Mapa Turístico** - Simulación interactiva con marcadores y leyenda
5. **Gastronomía y Artesanías** - Grid de 4 items (baleadas, café, textiles, cerámica)
6. **Hoteles** - Catálogo de hospedaje con estrellas y etiquetas
7. **Galería** - Grid tipo masonry con modal de imágenes
8. **Footer** - Información de contacto, enlaces rápidos y redes sociales

## 📁 Estructura del Proyecto

```
sitioTuristico/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Destinos.jsx
│   │   ├── Mapa.jsx
│   │   ├── GastronomiaArtesanias.jsx
│   │   ├── Hoteles.jsx
│   │   ├── Galeria.jsx
│   │   └── Footer.jsx
│   ├── data/              # Datos simulados
│   │   └── data.js        # Arrays de destinos, gastronomía, hoteles, etc.
│   ├── styles/            # Estilos CSS
│   │   ├── global.css     # Estilos globales y variables CSS
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── destinos.css
│   │   ├── mapa.css
│   │   ├── gastronomia.css
│   │   ├── hoteles.css
│   │   ├── galeria.css
│   │   └── footer.css
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css
├── public/                # Archivos estáticos
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Diseño y Colores

**Paleta de Colores:**
- Verde Oscuro Principal: `#2d5016`
- Verde Secundario: `#4a7023` / `#5a8c2e`
- Beige/Accent: `#d4c4a8`
- Crema de Fondo: `#f5f1e8`
- Café Oscuro: `#3d2817`
- Blanco: `#ffffff`

**Elementos de Diseño:**
- Bordes redondeados (radius 0.5rem - 1.5rem)
- Sombras suaves y sutiles
- Espaciado moderno y consistente
- Transiciones fluidas (0.3s ease)

## 🚀 Cómo Ejecutar

### Requisitos
- Node.js (v14 o superior)
- npm o yarn

### Instalación y Ejecución

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
El sitio estará disponible en `http://localhost:5173/`

### Compilar para producción:
```bash
npm run build
```

### Vista previa de producción:
```bash
npm run preview
```

## 📊 Datos Simulados

El proyecto utiliza datos simulados en `src/data/data.js` que incluye:

- **Destinos**: La Paz, Intibucá, Copán
- **Gastronomía**: Baleadas, Café de Marcala, Textiles Lencas, Cerámica
- **Hoteles**: 4 hospedajes diferentes
- **Galería**: 8 imágenes de diferentes categorías
- **Mapa Turístico**: 5 marcadores interactivos
- **Menú**: 8 opciones de navegación
- **Contacto**: Información de email, teléfono, redes sociales

## 🔧 Tecnologías Utilizadas

- **React** - Librería de UI con componentes funcionales
- **Vite** - Build tool moderno y rápido
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript ES6+** - JavaScript moderno

## 📱 Responsividad

El sitio es completamente responsive con breakpoints en:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: 480px - 767px
- **Móvil pequeño**: < 480px

## 🎯 Funcionalidades Interactivas

✅ **Navbar Responsive** - Menú hamburguesa para móvil
✅ **Mapa Interactivo** - Click en marcadores para ver detalles
✅ **Galería Modal** - Click en imágenes para ampliarlas
✅ **Animaciones** - Transiciones suaves y entrada de elementos
✅ **Scroll Smooth** - Navegación suave entre secciones

## 📝 Notas Importantes

- Las imágenes utilizan URLs de Unsplash como placeholders
- Los datos son completamente simulados y educacionales
- El proyecto está listo para integrar un backend real
- La estructura está optimizada para escalabilidad

## 🎓 Para Personalizar

1. **Cambiar Colores**: Edita las variables CSS en `src/styles/global.css`
2. **Agregar Destinos**: Actualiza el array `destinos` en `src/data/data.js`
3. **Modificar Contenido**: Edita los componentes de React según necesites
4. **Reemplazar Imágenes**: Usa tus propias URLs en el array de datos

## 📄 Licencia

Proyecto educacional. Libre para uso y modificación.

## 👨‍💻 Autor

Desarrollado como sitio web turístico de Honduras.

---

**¡Disfruta explorando Sabores y Raíces Catrachas!** 🌿✨
