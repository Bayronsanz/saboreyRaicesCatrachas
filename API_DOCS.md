# 🚀 API del Mapa Turístico - Backend

## Configuración e Instalación

El backend está implementado con **Node.js** y **Express.js**, sirviendo una API RESTful para el mapa turístico interactivo.

### Instalar Dependencias

```bash
npm install
```

### Ejecutar el Servidor

```bash
# Desarrollo (modo watch)
npm run server:dev

# Producción
npm run server
```

El servidor se ejecutará en: `http://localhost:5000`

---

## 📍 Endpoints Disponibles

### Departamentos

#### Obtener todos los departamentos
```
GET /api/departamentos
```
**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nombre": "La Paz",
      "codigo": "LP",
      "descripcion": "...",
      "imagen": "...",
      "coordenadas": { "latitud": 14.4167, "longitud": -88.2333 },
      "atractivos": [...],
      "gastronomia": [...]
    }
  ],
  "total": 3
}
```

#### Obtener departamento por ID
```
GET /api/departamentos/:id
```
Ejemplo: `GET /api/departamentos/1`

#### Obtener departamento por nombre
```
GET /api/departamentos/nombre/:nombre
```
Ejemplo: `GET /api/departamentos/nombre/La%20Paz`

---

### Marcadores

#### Obtener todos los marcadores
```
GET /api/marcadores
```

#### Obtener marcadores por departamento
```
GET /api/marcadores/departamento/:nombre
```
Ejemplo: `GET /api/marcadores/departamento/La%20Paz`

#### Obtener marcadores por tipo
```
GET /api/marcadores/tipo/:tipo
```
Ejemplo: `GET /api/marcadores/tipo/Mirador`

#### Obtener marcador por ID
```
GET /api/marcador/:id
```
Ejemplo: `GET /api/marcador/1`

#### Obtener marcadores cercanos (por proximidad)
```
GET /api/marcadores/cerca?lat=14.84&lng=-89.14&radio=50
```
**Parámetros:**
- `lat` (required): Latitud
- `lng` (required): Longitud
- `radio` (optional, default=50): Radio en kilómetros

---

### Filtros

#### Obtener todos los filtros disponibles
```
GET /api/filtros
```

---

### Mapa Completo

#### Obtener información completa (departamentos + marcadores + filtros)
```
GET /api/mapa-completo
```
Perfecto para la carga inicial del mapa.

---

## 🗺️ Departamentos Disponibles

1. **La Paz** (LP)
   - Altitud: 1,800 msnm
   - Temperatura: 22°C
   - Atractivos: 4
   
2. **Intibucá** (INT)
   - Altitud: 1,950 msnm
   - Temperatura: 18°C
   - Atractivos: 4
   
3. **Copán** (COP)
   - Altitud: 650 msnm
   - Temperatura: 24°C
   - Atractivos: 5

---

## 🏷️ Tipos de Marcadores

- 🌄 Mirador
- 🏛️ Sitio Histórico
- 🌍 Patrimonio UNESCO
- 📿 Arqueología
- 🌳 Naturaleza
- 🏨 Hotel
- 🏭 Industrial
- 🎨 Comercio
- 🏺 Museo

---

## 🔌 Conectar con el Frontend

El frontend está configurado para consumir esta API. Asegúrate de que:

1. La URL del servidor sea correcta en el archivo `.env`
2. Ambos servicios estén ejecutándose

### Ejecutar junto con el Frontend

```bash
# Terminal 1: Backend
npm run server:dev

# Terminal 2: Frontend
npm run dev
```

---

## 📊 Estructura de Datos

### Departamento
```javascript
{
  id: number,
  nombre: string,
  codigo: string,
  descripcion: string,
  imagen: string,
  imagenAlternativa: string,
  coordenadas: { latitud: number, longitud: number },
  posicionMapa: { top: string, left: string },
  temperaturaPromedio: string,
  altitud: string,
  poblacion: string,
  atractivos: Array<Atractivo>,
  gastronomia: Array<string>,
  clima: string,
  mejorEpocaVisita: string
}
```

### Marcador
```javascript
{
  id: number,
  nombre: string,
  departamento: string,
  tipo: string,
  descripcion: string,
  imagen: string,
  coordenadas: { lat: number, lng: number },
  posicion: { top: string, left: string }
}
```

### Atractivo
```javascript
{
  nombre: string,
  tipo: string,
  descripcion: string,
  icon: string,
  coordenadas: { lat: number, lng: number }
}
```

---

## 🛠️ Stack Tecnológico

- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **CORS**: Habilitación de Cross-Origin Requests
- **dotenv**: Gestión de variables de entorno

---

## 📝 Notas

- La API está completamente documentada y lista para producción
- Los datos están estructurados para facilitar filtros y búsquedas
- Incluye cálculo de distancia entre marcadores (Fórmula de Haversine)
- Todos los endpoints retornan respuestas en formato JSON
- Manejo de errores 404 para recursos no encontrados

---

¡Tu API del Mapa Turístico está lista para usar! 🎉
