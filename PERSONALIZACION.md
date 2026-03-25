# 🎨 Guía de Personalización

Este documento te ayuda a personalizar el sitio web según tus necesidades.

## 1. Cambiar Colores

Los colores están definidos como variables CSS en `src/styles/global.css`.

### Ubicación:
```
src/styles/global.css (líneas 3-15)
```

### Variables de Color Disponibles:

```css
:root {
  /* Colores principales - Cambia estos para una nueva paleta */
  --primary-dark: #2d5016;      /* Verde oscuro principal */
  --primary-green: #4a7023;     /* Verde primario */
  --secondary-green: #5a8c2e;   /* Verde secundario */
  --accent-beige: #d4c4a8;      /* Beige/Accent */
  --cream: #f5f1e8;             /* Crema de fondo */
  --dark-coffee: #3d2817;       /* Café oscuro */
  --light-brown: #8b7355;       /* Marrón claro */
  --white: #ffffff;             /* Blanco */
  --dark-text: #2c2c2c;         /* Texto oscuro */
  --light-text: #555;           /* Texto claro */
}
```

### Ejemplo: Cambiar a una paleta azul

```css
:root {
  --primary-dark: #003d82;      /* Azul oscuro */
  --primary-green: #0057b8;     /* Azul medio */
  --secondary-green: #1e90ff;   /* Azul claro */
  --accent-beige: #87ceeb;      /* Sky blue accent */
  --cream: #f0f8ff;             /* Alice blue fondo */
  /* ... resto de variables */
}
```

## 2. Modificar Contenido de Secciones

### 2.1 Cambiar el Título Principal (Hero)

**Archivo:** `src/components/Hero.jsx`

```jsx
<h1 className="hero-title">
  Tu nuevo texto aquí
</h1>
```

### 2.2 Cambiar Menú de Navegación

**Archivo:** `src/data/data.js`

Busca el array `menuItems`:

```javascript
export const menuItems = [
  "Tu Nueva Opción",  // Agregar nuevas opciones aquí
  "Otra Opción",
  // ... resto del menú
];
```

### 2.3 Actualizar Información de Contacto

**Archivo:** `src/data/data.js`

```javascript
export const contactInfo = {
  email: "tu@email.com",
  telefono: "+504 XXXX-XXXX",
  direccion: "Tu dirección aquí",
  linkedin: "https://linkedin.com/in/tuprofile",
  facebook: "https://facebook.com/tupagina",
  instagram: "https://instagram.com/tuperfil",
  twitter: "https://twitter.com/tuperfil"
};
```

## 3. Agregar o Modificar Destinos

**Archivo:** `src/data/data.js`

### Estructura de un Destino:

```javascript
{
  id: 1,
  nombre: "Nombre del Destino",
  titulo: "Subtítulo o categoría",
  descripcion: "Descripción detallada del destino...",
  imagen: "URL de imagen",
  ubicacion: "Departamento, País",
  atractivos: ["Atractivo 1", "Atractivo 2", "Atractivo 3"]
}
```

### Ejemplo Completo:

```javascript
export const destinos = [
  {
    id: 1,
    nombre: "Utila",
    titulo: "Paraíso Caribeño",
    descripcion: "Descubre la isla más hermosa del Caribe hondureño con playas de arena blanca y arrecifes de coral únicos.",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
    ubicacion: "Islas de la Bahía, Honduras",
    atractivos: ["Buceo", "Playas", "Snorkel", "Vida marina"]
  },
  // ... agregar más destinos aquí
];
```

## 4. Agregar o Modificar Gastronomía

**Archivo:** `src/data/data.js`

### Estructura:

```javascript
{
  id: 1,
  nombre: "Nombre del Platillo",
  tipo: "Platillo Tradicional | Bebida | Artesanía",
  descripcion: "Descripción del producto...",
  imagen: "URL de imagen",
  precio: "$20-30"  // O rango de precios
}
```

### Agregar:

```javascript
export const gastronomia = [
  // ... items existentes
  {
    id: 5,
    nombre: "Tamales",
    tipo: "Platillo Tradicional",
    descripcion: "Tamales caseros envueltos en hoja de plátano, rellenos de pollo, queso y rajas.",
    imagen: "https://images.unsplash.com/photo-1565621325589-a3fa22277f76?w=400&h=300&fit=crop",
    precio: "$2-3"
  }
];
```

## 5. Agregar o Modificar Hoteles

**Archivo:** `src/data/data.js`

### Estructura:

```javascript
{
  id: 1,
  nombre: "Nombre del Hotel",
  ubicacion: "Departamento",
  descripcion: "Descripción del hotel...",
  estrellas: 4,  // Número de 1 a 5
  imagen: "URL de imagen",
  precio: "$120-180",
  etiquetas: ["WiFi", "Restaurante", "Piscina"],  // Amenidades
  telefono: "+504 2269-XXXX"
}
```

## 6. Cambiar Imágenes

### Opción 1: Usar URLs de Internet (Recomendado para desarrollo)

Simplemente cambia el valor de `imagen`:

```javascript
imagen: "https://nuevaurl.com/imagen.jpg"
```

### Opción 2: Usar archivos locales

1. Coloca las imágenes en `public/images/`
2. Referencia así:

```javascript
imagen: "/images/mi-imagen.jpg"
```

## 7. Personalizar Estilos CSS

### Cambiar Espaciado

En `src/styles/global.css`:

```css
:root {
  /* Espaciado */
  --spacing-xs: 0.5rem;   /* Pequeño */
  --spacing-sm: 1rem;     /* Pequeño-medio */
  --spacing-md: 1.5rem;   /* Medio */
  --spacing-lg: 2rem;     /* Grande */
  --spacing-xl: 3rem;     /* Muy grande */
  --spacing-2xl: 4rem;    /* Extra grande */
}
```

### Cambiar Radio de Bordes

```css
:root {
  --radius-sm: 0.5rem;   /* Ligeramente redondeado */
  --radius-md: 1rem;     /* Moderadamente redondeado */
  --radius-lg: 1.5rem;   /* Muy redondeado */
}
```

### Cambiar Sombras

```css
:root {
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);   /* Sombra pequeña */
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15); /* Sombra media */
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);  /* Sombra grande */
}
```

## 8. Cambiar Fuentes

En `src/styles/global.css` (línea 19):

```css
body {
  font-family: 'Tu Fuente', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Puedes agregar fuentes de Google Fonts */
}
```

### Agregar fuente de Google Fonts:

Agrega esta línea antes de `<style>` en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

Luego úsala:

```css
h1, h2 {
  font-family: 'Playfair Display', serif;
}
```

## 9. Agregar Nueva Sección

### Crear un nuevo componente:

1. Crea `src/components/MiSeccion.jsx`:

```jsx
import React from 'react';
import '../styles/misecion.css';

export default function MiSeccion() {
  return (
    <section id="mi-seccion" className="misecion">
      <div className="container">
        {/* Tu contenido aquí */}
      </div>
    </section>
  );
}
```

2. Crea `src/styles/misecion.css` con tus estilos

3. Importa en `App.jsx`:

```jsx
import MiSeccion from './components/MiSeccion';

// Y agrégalo en el JSX:
<MiSeccion />
```

## 10. Cambiar Tipografía

### Cambiar tamaño de encabezados

En `src/styles/global.css`:

```css
h1 {
  font-size: 3rem;  /* Aumenta o disminuye este valor */
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 2.5rem;  /* Ajusta aquí también */
  font-weight: 700;
}
```

## 11. Crear Temas Alternativos

### Tema Oscuro

Crea `src/styles/dark-theme.css`:

```css
:root[data-theme="dark"] {
  --primary-dark: #1a1a1a;
  --white: #f5f5f5;
  --cream: #2a2a2a;
  /* ... más variables oscuras */
}
```

## Checklist de Personalización

- [ ] Cambié los colores principales
- [ ] Actualicé la información de contacto
- [ ] Reemplacé las imágenes con fotos reales
- [ ] Agregué/modifiqué destinos
- [ ] Actualicé el menú de navegación
- [ ] Cambié textos de encabezados
- [ ] Personalicé fuentes
- [ ] Probé en móvil y desktop

---

¿Necesitas más ayuda? Revisa `README.md` o `INSTALACION.md`.

**¡Que disfrutes personalizando tu sitio!** ✨
