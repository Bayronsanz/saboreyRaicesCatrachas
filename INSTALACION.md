# 🚀 Guía de Instalación y Ejecución

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 14 o superior) - [Descargar](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

## Pasos de Instalación

### 1. Abrir la Terminal

- En Windows: Presiona `Win + R`, escribe `cmd` y presiona Enter
- En Mac/Linux: Abre la aplicación Terminal

### 2. Navegar al Directorio del Proyecto

```bash
cd "ruta del proyecto"
```

Por ejemplo:
```bash
cd "C:\Users\Admin\OneDrive\Documents\sitioTuristico"
```

### 3. Instalar Dependencias

Ejecuta el siguiente comando para descargar todas las librerías necesarias:

```bash
npm install
```

Este proceso puede tomar algunos minutos dependiendo de tu conexión a internet.

## Ejecutar el Proyecto

### Opción 1: Modo Desarrollo (Recomendado)

Para ejecutar el proyecto en modo desarrollo con hot reload (los cambios se ven automáticamente):

```bash
npm run dev
```

Después de ejecutar este comando, verás un mensaje como:
```
  VITE v8.0.0  ready in 1122 ms

  ➜  Local:   http://localhost:5173/
```

### Opción 2: Abrir en el Navegador

1. Copia la URL `http://localhost:5173/`
2. Abre tu navegador favorito (Chrome, Firefox, Edge, Safari)
3. Pega la URL en la barra de direcciones
4. ¡Presiona Enter!

## Construir para Producción

Cuando estés listo para crear una versión optimizada para deploy:

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos listos para producción.

## Ver Vista Previa de Producción

Para ver cómo se vería el sitio en producción:

```bash
npm run preview
```

## Solución de Problemas

### El servidor no inicia

**Problema:** Aparece un error al ejecutar `npm run dev`

**Soluciones:**
1. Asegúrate de estar en el directorio correcto: `cd sitioTuristico`
2. Verifica que npm esté instalado: `npm --version`
3. Intenta eliminar `node_modules` y `package-lock.json`, luego corre `npm install` nuevamente:
   ```bash
   rm -r node_modules
   rm package-lock.json
   npm install
   ```

### Puerto 5173 en uso

**Problema:** "Port 5173 is already in use"

**Solución:** El puerto está siendo usado por otro programa. Puedes:
1. Cerrar otras aplicaciones que usen este puerto
2. O cambiar el puerto en vite.config.js

### Errores de módulos faltantes

**Problema:** "Cannot find module..."

**Solución:**
```bash
npm install
```

Ejecuta este comando nuevamente.

## Estructura de Archivos Importantes

```
src/
├── components/        # Componentes React
├── styles/           # Archivos CSS
├── data/             # Datos simulados
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada
```

## Editar el Contenido

### Cambiar Colores

Abre `src/styles/global.css` y modifica las variables del `:root`:

```css
:root {
  --primary-dark: #2d5016;    /* Cambia este color */
  --accent-beige: #d4c4a8;    /* Y este también */
  /* ... más variables */
}
```

### Agregar Nuevos Destinos

Edita `src/data/data.js` y agrega un nuevo objeto al array `destinos`:

```javascript
export const destinos = [
  // ... destinos existentes
  {
    id: 4,
    nombre: "Tu Nuevo Destino",
    titulo: "Descripción corta",
    descripcion: "Descripción completa...",
    imagen: "URL de imagen",
    ubicacion: "Ubicación",
    atractivos: ["Atractivo 1", "Atractivo 2"]
  }
];
```

### Actualizar Textos

Los textos principales se encuentran en los componentes:
- `src/components/Hero.jsx` - Texto de bienvenida
- `src/components/Navbar.jsx` - Menú de navegación
- `src/components/Footer.jsx` - Información de contacto

## Atajos Útiles en Visual Studio Code

- `Ctrl + S` - Guardar archivo
- `Ctrl + Shift + F` - Buscar en todo el proyecto
- `Ctrl + H` - Buscar y reemplazar
- `Ctrl + /` - Comentar línea
- `F12` - Abrir herramientas de desarrollador

## Próximos Pasos

1. **Personaliza los colores** según tu marca
2. **Reemplaza las imágenes** con fotos reales de Honduras
3. **Actualiza la información de contacto** en `src/data/data.js`
4. **Agrega más destinos** si lo necesitas
5. **Conecta con un backend** para datos dinámicos

## Necesitas Ayuda?

- Revisa el archivo `README.md` para documentación completa
- Consulta la [documentación oficial de React](https://react.dev)
- Consulta la [documentación oficial de Vite](https://vite.dev)

---

¡Listo! Ahora deberías tener el sitio ejecutándose. **¡Que disfrutes explorando Sabores y Raíces Catrachas!** 🌿✨
