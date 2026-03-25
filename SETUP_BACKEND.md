# 🎉 API del Mapa Turístico Implementada

## ✅ Lo que se ha completado

### 1. **Backend API con Express.js**
- ✅ Servidor corriendo en `http://localhost:5000`
- ✅ RESTful API completa para datos turísticos
- ✅ Endpoints para departamentos, marcadores y filtros
- ✅ Búsqueda por proximidad (radio en km)

### 2. **Base de Datos de Departamentos**
Se han estructurado datos completos para **3 departamentos principales**:

#### 🏔️ **La Paz**
- **Imagen**: Paisajes de montaña cafetalera
- **Atractivos principales**:
  - Mirador del Café
  - Beneficio de Café
  - Tienda de Artesanías
  - Hacienda Real Hotel
- **Altitud**: 1,800 msnm
- **Temperatura**: 22°C
- **Gastronomía**: Café de origen volcánico, Baleadas, Sopa de mondongo, Pupusas

#### 🎨 **Intibucá**
- **Imagen**: Mercado cultural lenca
- **Atractivos principales**:
  - La Esperanza - Centro Cultural
  - Gruta de La Esperanza
  - Pueblo Lenca de Yamaranguila
  - Posada Lenca
- **Altitud**: 1,950 msnm
- **Temperatura**: 18°C
- **Gastronomía**: Tamales de elote, Sopa de pachoya, Tejate, Quesadillas de ayote

#### 🏛️ **Copán**
- **Imagen**: Ruinas mayas
- **Atractivos principales**:
  - Ruinas de Copán (Patrimonio UNESCO)
  - Plaza de las Estelas
  - Museo de Copán
  - Copán Lodge
  - Mirador del Río Copán
- **Altitud**: 650 msnm
- **Temperatura**: 24°C
- **Gastronomía**: Tilapia del Río Copán, Caldo de res, Tortillas de maíz, Hongos silvestres

---

## 🚀 Cómo Ejecutar el Proyecto

### **Opción 1: Ejecutar Backend y Frontend por Separado**

#### Terminal 1 - Backend (ya está ejecutándose):
```bash
npm run server:dev
```
Será accesible en: `http://localhost:5000`

#### Terminal 2 - Frontend:
```bash
npm run dev
```
Será accesible en: `http://localhost:5173`

### **Opción 2: Ejecutar Todo Junto (requiere concurrently)**
```bash
npm install concurrently --save-dev
npm run dev:all
```

---

## 📍 Endpoints Disponibles

### **Departamentos**
- `GET /api/departamentos` - Todos los departamentos
- `GET /api/departamentos/:id` - Por ID
- `GET /api/departamentos/nombre/:nombre` - Por nombre

### **Marcadores**
- `GET /api/marcadores` - Todos los marcadores
- `GET /api/marcadores/departamento/:nombre` - Por departamento
- `GET /api/marcadores/tipo/:tipo` - Por tipo de atractivo
- `GET /api/marcador/:id` - Por ID
- `GET /api/marcadores/cerca?lat=X&lng=Y&radio=50` - Por proximidad

### **Filtros y Mapa**
- `GET /api/filtros` - Tipos de filtros disponibles
- `GET /api/mapa-completo` - Datos completos del mapa

---

## 🎨 Frontend - Características del Mapa

### **Selector Visual de Departamentos**
- Tarjetas con imágenes de cada departamento
- Información de altitud, temperatura y población
- Gastronomía local destacada

### **Mapa Interactivo**
- Visualización de marcadores de atractivos
- Posicionamiento geográfico relativo
- Información al hacer clic en marcadores

### **Sistema de Filtros**
- Filtrar por tipo de atractivo (Mirador, Hotel, Museo, etc.)
- Filtrar por departamento
- Combinación de filtros

### **Leyenda Interactiva**
- Iconos para cada categoría de atractivos
- Información de coordenadas de marcadores

---

## 📊 Estructura del Proyecto

```
sitioTuristico/
├── api/
│   ├── routes/
│   │   └── mapRoutes.js          # Rutas de la API
│   └── data/
│       └── departamentos.js       # Datos de departamentos y marcadores
├── src/
│   ├── components/
│   │   └── Mapa.jsx              # Componente principal del mapa
│   └── styles/
│       └── mapa.css              # Estilos mejorados
├── server.js                      # Servidor Express
├── package.json                   # Dependencias
├── .env                           # Variables de entorno
└── API_DOCS.md                   # Documentación API
```

---

## 🔧 Tecnologías Utilizadas

### **Backend**
- Node.js
- Express.js
- CORS
- dotenv

### **Frontend**
- React.js
- Vite
- CSS Moderno

---

## 📋 Instalación de Dependencias (si es necesario)

```bash
# Instalar todas las dependencias
npm install

# Instalar dependencias específicamente
npm install express cors dotenv
```

---

## ✨ Características Especiales

1. **API Escalable**: Estructura lista para agregar más departamentos y marcadores
2. **Búsqueda por Proximidad**: Encuentra marcadores cercanos usando coordenadas
3. **Imágenes de Alta Calidad**: URLs de imágenes reales de los departamentos
4. **Interfaz Responsive**: Se adapta a dispositivos móviles
5. **Documentación Completa**: Ver `API_DOCS.md` para detalles técnicos

---

## 🎯 Próximos Pasos (Opcional)

Si deseas mejorar más:
1. Agregar base de datos (MongoDB, PostgreSQL)
2. Autenticación de usuarios
3. Sistema de reseñas y comentarios
4. Integración con Google Maps
5. Sistema de reservas de hoteles
6. Chat en vivo

---

## 📞 Soporte

El servidor está configurado para:
- ✅ Recibir solicitudes del frontend en `http://localhost:3000` o similar
- ✅ Servir datos en formato JSON
- ✅ Manejar errores 404 apropiadamente
- ✅ Registrar requests en consola para debugging

---

¡Tu API del Mapa Turístico está lista para producción! 🚀
Todos los 3 departamentos están marcados, con imágenes e información completa.
