# ⚡ Guía Rápida de Inicio

Bienvenido a **Sabores y Raíces Catrachas**. Aquí está todo lo que necesitas saber para empezar en 5 minutos.

## 🚀 Iniciar en 3 pasos

### Paso 1: Abrir Terminal
```bash
# Windows: Presiona Ctrl + Shift + ` (backtick) en VS Code
# O: Win + R → cmd → Enter
```

### Paso 2: Instalar y Ejecutar
```bash
npm install
npm run dev
```

### Paso 3: Abrir en Navegador
```
Abre: http://localhost:5173/
```

**¡Listo! Tu sitio está corriendo.** 🎉

---

## 🎨 Cambiar Colores (5 min)

### Archivo a editar:
```
src/styles/global.css
```

### Busca y cambia:
```css
:root {
  --primary-dark: #2d5016;      /* Verde oscuro - CÁMBIAME */
  --accent-beige: #d4c4a8;      /* Beige - CÁMBIAME */
  /* ... cada color que quieras cambiar */
}
```

**Guarda (Ctrl+S)** y el navegador se recarga automáticamente.

---

## ✏️ Cambiar Textos

### Título Principal (Hero)
**Archivo:** `src/components/Hero.jsx`
Busca y cambia:
```jsx
<h1 className="hero-title">
  Tu nuevo título aquí
</h1>
```

### Menú de Navegación
**Archivo:** `src/data/data.js`
Busca:
```javascript
export const menuItems = [
  "Inicio",
  "Destinos",
  // Agrega o quita opciones aquí
];
```

### Información de Contacto
**Archivo:** `src/data/data.js`
Busca:
```javascript
export const contactInfo = {
  email: "tu@email.com",     // CÁMBIAME
  telefono: "+504 XXXX-XXXX", // CÁMBIAME
  direccion: "Tu dirección",  // CÁMBIAME
};
```

---

## 🖼️ Cambiar Imágenes

### Opción 1: Usar URLs (Más fácil)
En `src/data/data.js`, busca arrays como `destinos`:
```javascript
imagen: "https://nueva-url-imagen.com/foto.jpg"  // Cambia esta URL
```

### Opción 2: Archivos locales (Mejor)
1. Coloca imágenes en: `public/images/`
2. En los datos, usa:
```javascript
imagen: "/images/mi-foto.jpg"
```

---

## ➕ Agregar Nuevo Destino

**Archivo:** `src/data/data.js`

Agrega esto al array `destinos`:
```javascript
{
  id: 4,
  nombre: "Nombre Destino",
  titulo: "Subtítulo",
  descripcion: "Descripción completa aquí...",
  imagen: "/images/mi-imagen.jpg",
  ubicacion: "Departamento, Honduras",
  atractivos: ["Atractivo 1", "Atractivo 2", "Atractivo 3"]
}
```

¡Listo! Aparecerá automáticamente.

---

## 🍴 Agregar Platillo/Artesanía

**Archivo:** `src/data/data.js`

Agrega al array `gastronomia`:
```javascript
{
  id: 5,
  nombre: "Mi Platillo",
  tipo: "Platillo Tradicional",
  descripcion: "Descripción...",
  imagen: "/images/platillo.jpg",
  precio: "$10-15"
}
```

---

## 🏨 Agregar Hotel

**Archivo:** `src/data/data.js`

Agrega al array `hoteles`:
```javascript
{
  id: 5,
  nombre: "Mi Hotel",
  ubicacion: "La Paz",
  descripcion: "Descripción del hotel...",
  estrellas: 4,
  imagen: "/images/hotel.jpg",
  precio: "$100-150",
  etiquetas: ["WiFi", "Pool", "Restaurante"],
  telefono: "+504 XXXX-XXXX"
}
```

---

## 📁 Estructura Importante

```
src/
├── components/        ← Aquí están las secciones (no editar estructura)
├── data/
│   └── data.js       ← AQUÍ: Cambiar destinos, hoteles, textos
├── styles/
│   ├── global.css    ← AQUÍ: Cambiar colores, fuentes, espaciado
│   └── ...           ← Estilos específicos (evitar editar)
└── App.jsx           ← No toques esto
```

---

## ✅ Checklist Para Comenzar

- [ ] Instalé dependencias (`npm install`)
- [ ] Ejecuté servidor (`npm run dev`)
- [ ] Abrí en navegador (http://localhost:5173)
- [ ] Cambié email de contacto en `data.js`
- [ ] Cambié los colores en `global.css`
- [ ] Agregué mis imágenes en `public/images/`
- [ ] Actualicé destinos en `data.js`

---

## 🆘 Problemas Comunes

### "npm: comando no encontido"
→ Instala Node.js desde https://nodejs.org

### "Puerto 5173 está en uso"
→ Otro programa lo usa. Cierra otras pestañas o reinicia.

### "Errores de módulos"
→ Ejecuta: `npm install`

### "Los cambios no se ven"
→ Guarda el archivo (Ctrl+S) y espera a que Vite recargue

---

## 📚 Documentos Completos

- **README.md** ← Documentación completa
- **INSTALACION.md** ← Pasos detallados
- **PERSONALIZACION.md** ← Guía avanzada
- **COMPLETADO.md** ← Resumen del proyecto

---

## 🎨 Paleta de Colores Por Defecto

| Color | Código | Uso |
|-------|--------|-----|
| Verde Oscuro | `#2d5016` | Fondo navbar, títulos |
| Verde Medio | `#4a7023` | Botones principal |
| Verde Claro | `#5a8c2e` | Botones secundarios |
| Beige | `#d4c4a8` | Acentos, badges |
| Crema | `#f5f1e8` | Fondo de secciones |
| Café | `#3d2817` | Textos oscuros |
| Blanco | `#ffffff` | Fondo principal |

---

## 🌐 Información de la Web

| Elemento | Ubicación | Cómo Cambiar |
|----------|-----------|--------------|
| Logo navbar | `src/components/Navbar.jsx` | Busca h2 del logo |
| Título hero | `src/components/Hero.jsx` | Busca h1 |
| Menú | `src/data/data.js` → `menuItems` | Edita array |
| Contacto | `src/data/data.js` → `contactInfo` | Edita objeto |
| Destinos | `src/data/data.js` → `destinos` | Agregar al array |
| Gastronomía | `src/data/data.js` → `gastronomia` | Agregar al array |
| Hoteles | `src/data/data.js` → `hoteles` | Agregar al array |
| Colores | `src/styles/global.css` | Edita variables CSS |

---

## 🎯 Metas Comunes

### "Quiero cambiar solo los colores"
1. Abre: `src/styles/global.css`
2. Cambia las variables de `:root`
3. ¡Listo!

### "Quiero agregar más destinos"
1. Abre: `src/data/data.js`
2. Copia un destino existente
3. Cambia los datos
4. ¡Aparece automáticamente!

### "Quiero cambiar la información de contacto"
1. Abre: `src/data/data.js`
2. Busca: `export const contactInfo`
3. Cambia email, teléfono, redes

### "Quiero cambiar las imágenes"
1. Coloca imágenes en: `public/images/`
2. Abre: `src/data/data.js`
3. Cambia las URLs en `imagen:`

---

## 📞 Comandos Útiles

```bash
# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Ver vista previa de producción
npm run preview

# Limpiar dependencias y reinstalar
rm -r node_modules
npm install
```

---

## 💡 Pro Tips

1. **Guarda frecuentemente** (Ctrl+S) - Vite recarga automáticamente
2. **Usa F12** en el navegador para inspeccionar elementos
3. **Abre la consola** (F12 → Console) para ver errores
4. **Comenta código** con `/* comentario */` para recordar cambios
5. **Copia/Pega** elementos (ej: destinos) para crear nuevos

---

## 🚀 Cuando Todo Esté Listo

```bash
# Compilar para producción
npm run build

# Verás una carpeta "dist/" lista para subir a:
# - Vercel (vercel.com)
# - Netlify (netlify.com)
# - Tu servidor web propio
```

---

## ¿Más ayuda?

- Revisa **README.md** para documentación completa
- Revisa **INSTALACION.md** para pasos detallados
- Revisa **PERSONALIZACION.md** para cambios avanzados
- Visita **https://react.dev** para aprender React
- Visita **https://vite.dev** para aprender Vite

---

**¡Listo para crear?** Ejecuta:
```bash
npm run dev
```

Y abre: http://localhost:5173/

**¡Que disfrutes tu sitio!** 🌿✨
