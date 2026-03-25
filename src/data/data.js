// Datos simulados para el sitio

export const destinos = [
  {
    id: 1,
    nombre: "La Paz",
    titulo: "Ruta del Café",
    descripcion: "Descubre las plantaciones de café de Marcala, una de las regiones cafétaleras más importantes de Honduras. Conoce el proceso de cultivo y disfruta del mejor café del país.",
    imagen: "https://www.laprensa.hn/binrepository/600x337/0c0/0d0/none/11004/OBIQ/tmrutapaz0209181_LP1212411_MG286553922.jpg",
    ubicacion: "La Paz, Honduras",
    atractivos: ["Plantaciones de café", "Beneficios de café", "Miradores", "Tiendas de artesanías"]
  },
  {
    id: 2,
    nombre: "Intibucá",
    titulo: "Cultura Lenca",
    descripcion: "Descubre la rica cultura de los pueblos Lencas en Intibucá, con sus tradiciones, festivales y gastronomía local.",
    imagen: "https://www.honduras.com/wp-content/uploads/2022/08/la-gruta-de-La-Esperanza-Intibuca.jpg",
    ubicacion: "Intibucá, Honduras",
    atractivos: ["Pueblos Lencas", "Artesanías tradicionales", "Festivales culturales", "Gastronomía local"]
  },
  {
    id: 3,
    nombre: "Copán",
    titulo: "Patrimonio Arqueológico",
    descripcion: "Explora las majestuosas ruinas mayas de Copán, Patrimonio de la Humanidad. Descubre la arquitectura y la historia de una de las civilizaciones más importantes de Mesoamérica.",
    imagen: "https://www.hondurasensusmanos.com/turismo/wp-content/uploads/2024/08/copan.jpg",
    ubicacion: "Copán Ruinas, Honduras",
    atractivos: ["Ruinas mayas", "Museo de Copán", "Plaza de las Estelas", "Centro de visitantes"]
  }
];

export const gastronomia = [
  {
    id: 1,
    nombre: "Baleadas",
    tipo: "Platillo Tradicional",
    descripcion: "Tortillas rellenas de frijoles, queso y huevo. El platillo más popular de Honduras.",
    imagen: "https://www.elranchoinc.com/wp-content/uploads/sites/4/fly-images/346/1464x918baleadas-hero-image-1464x920-c.jpg",
    precio: "30-50 LPS"
  },
  {
    id: 2,
    nombre: "Café de Marcala",
    tipo: "Bebida Premium",
    descripcion: "Café de origen volcánico de la región de Marcala, reconocido internacionalmente por su calidad y aroma.",
    imagen: "https://www.laprensa.hn/binrepository/600x394/0c0/0d0/none/11004/RGNM/cafehonduras.1_LP1112708_MG68610367.jpg",
    precio: "70 LPS"
  },
  {
    id: 3,
    nombre: "Textiles Lencas",
    tipo: "Artesanía",
    descripcion: "Tejidos tradicionales elaborados a mano con diseños y colores tradicionales de la cultura Lenca.",
    imagen: "https://www.honduras.com/wp-content/uploads/2020/12/artesanos-2.png",
    precio: "180 LPS"
  },
  {
    id: 4,
    nombre: "Cerámica Artesanal",
    tipo: "Artesanía",
    descripcion: "Piezas de cerámica únicas elaboradas por artesanos locales con técnicas ancestrales.",
    imagen: "https://i.pinimg.com/474x/c5/4f/02/c54f0261dbb34653b5d5bfa1beceb3ab.jpg",
    precio: "350 LPS"
  }
];

export const hoteles = [
  {
    id: 1,
    nombre: "Hacienda Real",
    ubicacion: "La Paz",
    descripcion: "Hotel boutique rodeado de plantaciones de café con vistas panorámicas.",
    estrellas: 4,
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b8/3c/eb/vista-de-la-plaza-de.jpg?w=900&h=500&s=1",
    precio: "$40-50",
    etiquetas: ["WiFi", "Restaurante", "Piscina"],
    telefono: "+504 2269-XXXX"
  },
  {
    id: 2,
    nombre: "Huella Lenca",
    ubicacion: "Intibucá",
    descripcion: "Casa tradicional convertida en posada con encanto folclórico.",
    estrellas: 3,
    imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/647374007.jpg?k=66de9e09782fdea07003ea22cc9fb1d33919862faab96380c1514457e3f72a26&o=",
    precio: "$20-25",
    etiquetas: ["WiFi", "Mascotas", "Patio"],
    telefono: "+504 2268-XXXX"
  },
  {
    id: 3,
    nombre: "Hotel Marina",
    ubicacion: "Copán Ruinas",
    descripcion: "Resort eco-amigable frente a las ruinas mayas con diseño contemporáneo.",
    estrellas: 4,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8O9iCVuu8_zLaZSizzdgjSFTEFEbWLmbzFQ&s",
    precio: "$50-70",
    etiquetas: ["WiFi", "Spa", "Restaurante", "Pet Friendly"],
    telefono: "+504 2651-XXXX"
  },
  {
    id: 4,
    nombre: "Hotel Montecillos",
    ubicacion: "La Paz",
    descripcion: "Hotel cómodo y acogedor ideal para viajeros.",
    estrellas: 3,
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2e/05/c7/98/property-building.jpg?w=400&h=-1&s=1",
    precio: "$20-30",
    etiquetas: ["WiFi", "Espacios amplios", "Tour desk"],
    telefono: "+504 2269-XXXX"
  }
];

export const galeria = [
  {
    id: 1,
    titulo: "Ruinas de Copán",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLjBVP5XILVH7Ujokjjk8HQZZcEV7F6bnGA&s",
    categoria: "Arqueología"
  },
  {
    id: 2,
    titulo: "Plantaciones de Café",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq7oKec13rPnJZ1Bjrc21aGPn-4iA-cuUPA&s",
    categoria: "Agricultura"
  },
  {
    id: 3,
    titulo: "Artesanías Lencas",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkOYtgWeTUxi1Qu5F-9Gieg2e9kE6QRDSEg&s",
    categoria: "Artesanía"
  },
  {
    id: 4,
    titulo: "Paisajes Montañosos",
    imagen: "https://images.unsplash.com/photo-1501028932887-da5de53af865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHNlbmRlcmlzbW98ZW58MHx8MHx8fDA%3D",
    categoria: "Naturaleza"
  },
  {
    id: 5,
    titulo: "Gastronomía Local",
    imagen: "https://www.mapanicaragua.com/wp-content/uploads/2020/07/Cosa-de-horno_lapazcentro_gastronomia3.jpg",
    categoria: "Gastronomía"
  },
  {
    id: 6,
    titulo: "Pueblos Tradicionales",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtklMuyWktnJCSyoZaMCCDdJIt3xKcWMqrQ&s",
    categoria: "Cultuta"
  },
  {
    id: 7,
    titulo: "Miradores",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8v75YpyGQ0flDltGBAJDg4CQ2aDxfS9RNg&s",
    categoria: "Vistas"
  },
  {
    id: 8,
    titulo: "Festivales Culturales",
    imagen: "https://www.buenprovecho.hn/wp-content/uploads/2022/10/D3B8DBA4-30FA-4E05-A25A-22CC1454BF35.jpeg",
    categoria: "Eventos"
  }
];

export const mapMarkersData = [
  {
    id: 1,
    nombre: "Mirador del Café",
    tipo: "Mirador",
    ubicacion: "La Paz",
    descripcion: "Vista panorámica de las plantaciones de café",
    posicion: { top: "30%", left: "20%" }
  },
  {
    id: 2,
    nombre: "Ruinas de Copán",
    tipo: "Sitio Histórico",
    ubicacion: "Copán",
    descripcion: "Patrimonio de la Humanidad - Ruinas Mayas",
    posicion: { top: "40%", left: "70%" }
  },
  {
    id: 3,
    nombre: "Restaurant Típico",
    tipo: "Restaurante",
    ubicacion: "Intibucá",
    descripcion: "Comida tradicional Lenca",
    posicion: { top: "50%", left: "40%" }
  },
  {
    id: 4,
    nombre: "Tienda de Artesanías",
    tipo: "Artesanías",
    ubicacion: "La Paz",
    descripcion: "Artículos tradicionales de la región",
    posicion: { top: "60%", left: "25%" }
  },
  {
    id: 5,
    nombre: "Hotel Hacienda",
    tipo: "Hotel",
    ubicacion: "La Paz",
    descripcion: "Hospedaje de lujo",
    posicion: { top: "55%", left: "65%" }
  }
];

export const menuItems = [
  "Inicio",
  "Destinos",
  "Mapa",
  "Gastronomía",
  //"Artesanías",
  "Hoteles",
  "Galería",
  "Contacto"
];

export const contactInfo = {
  email: "info@saboresyraices.hn",
  telefono: "+504 2269-XXXX",
  direccion: "La Paz, Intibucá, Honduras",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com"
};
