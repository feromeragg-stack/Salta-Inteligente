import { PrismaClient, Categoria } from '@prisma/client';

const prisma = new PrismaClient();

// Nota de Mentor: Hemos reemplazado los datos antiguos con 6 "Puntos Verdes"
// de compostaje, con descripciones que educan al usuario sobre su importancia.
// Las coordenadas son de lugares reales en Salta para darle realismo.
const puntosVerdes = [
  {
    nombre: 'Punto Composta: Parque San Martín',
    descripcion: 'Centro de compostaje comunitario. Trae tus residuos orgánicos (restos de frutas, verduras, yerba) y contribuye a generar abono natural para nuestras plazas.',
    latitud: -24.795,
    longitud: -65.410,
    categoria: Categoria.COMPOSTA,
  },
  {
    nombre: 'Punto Composta: Plaza Alvarado',
    descripcion: 'Iniciativa vecinal de compostaje. Aprende a transformar tus residuos en tierra fértil. Aceptamos restos de poda y orgánicos de cocina.',
    latitud: -24.801,
    longitud: -65.418,
    categoria: Categoria.COMPOSTA,
  },
  {
    nombre: 'Punto Composta: Parque del Bicentenario',
    descripcion: 'Aquí tus orgánicos se convierten en vida. Ayúdanos a reducir los desechos que van al vertedero y a crear un ecosistema más sano.',
    latitud: -24.755,
    longitud: -65.435,
    categoria: Categoria.COMPOSTA,
  },
  {
    nombre: 'Punto Composta: Plaza 9 de Julio',
    descripcion: 'En el corazón de la ciudad, un espacio para tus residuos orgánicos. Fomentamos la economía circular y el cuidado del medio ambiente.',
    latitud: -24.789,
    longitud: -65.411,
    categoria: Categoria.COMPOSTA,
  },
  {
    nombre: 'Punto Composta: Monumento 20 de Febrero',
    descripcion: 'Junto a nuestro patrimonio, cuidamos nuestro futuro. Deposita aquí tus restos de frutas y verduras para apoyar los jardines locales.',
    latitud: -24.782,
    longitud: -65.422,
    categoria: Categoria.COMPOSTA,
  },
  {
    nombre: 'Punto Composta: Plaza Güemes',
    descripcion: 'Pequeñas acciones, grandes cambios. Este punto de compostaje es mantenido por voluntarios. ¡Suma tu aporte a la comunidad!',
    latitud: -24.783,
    longitud: -65.407,
    categoria: Categoria.COMPOSTA,
  },
  // --- NUEVOS PUNTOS AÑADIDOS ---
  {
    nombre: 'Punto Reciclaje: Estación (Balcarce)',
    descripcion: 'Centro de recepción de materiales secos. Trae tus plásticos (PET), cartón, vidrio y latas. Ayúdanos a reintroducirlos en la cadena productiva.',
    latitud: -24.783,
    longitud: -65.413,
    categoria: Categoria.RECICLAJE,
  },
  {
    nombre: 'Punto Reciclaje: Grand Bourg',
    descripcion: 'Iniciativa de "Botellas de Amor". Trae tus ecoladrillos y plásticos de un solo uso para convertirlos en madera plástica.',
    latitud: -24.799,
    longitud: -65.445,
    categoria: Categoria.RECICLAJE,
  },
];

async function main() {
  console.log('Limpiando la base de datos...');
  await prisma.punto.deleteMany({});
  
  console.log('Creando nuevos puntos verdes...');
  for (const punto of puntosVerdes) {
    await prisma.punto.create({
      data: punto,
    });
  }
  console.log('Seeding finalizado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });