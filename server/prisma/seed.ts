import { PrismaClient, Categoria } from '@prisma/client';

// Crear una instancia de PrismaClient para el seeding
const prisma = new PrismaClient();

/**
 * Función principal de seeding
 * Inserta puntos de interés mezclados (ferias, museos, gobiernos, estadios, monumentos) de Salta
 */
async function main() {
  console.log('🌱 Iniciando seeding de la base de datos...');

  // Insertar puntos de interés mezclados con coordenadas reales de Salta
  await prisma.punto.createMany({
    data: [
      // FERIAS
      {
        nombre: 'Feria Artesanal del Cerro San Bernardo',
        descripcion: 'Feria de artesanías locales con productos tradicionales salteños. Ubicada en la base del teleférico del Cerro San Bernardo.',
        latitud: -24.7859,
        longitud: -65.4048,
        categoria: 'FERIA',
      },
      {
        nombre: 'Mercado San Miguel',
        descripcion: 'Mercado histórico con productos regionales, especias, y comida típica del norte argentino. Centro de la actividad comercial tradicional.',
        latitud: -24.7821,
        longitud: -65.4232,
        categoria: 'FERIA',
      },
      {
        nombre: 'Feria de la Plaza 9 de Julio',
        descripcion: 'Feria de emprendedores locales que se instala los fines de semana en la plaza principal. Productos gastronómicos y artesanales.',
        latitud: -24.7878,
        longitud: -65.4112,
        categoria: 'FERIA',
      },

      // MUSEOS
      {
        nombre: 'Museo de Arqueología de Alta Montaña (MAAM)',
        descripcion: 'Exhibe los Niños del Llullaillaco, uno de los hallazgos arqueológicos más importantes de los últimos tiempos.',
        latitud: -24.7944,
        longitud: -65.4109,
        categoria: 'MUSEO',
      },
      {
        nombre: 'Museo de la Ciudad Casa de Hernández',
        descripcion: 'Museo dedicado a la historia de Salta ubicado en una casa colonial del siglo XVIII',
        latitud: -24.7915,
        longitud: -65.4098,
        categoria: 'MUSEO',
      },
      {
        nombre: 'Museo Provincial de Bellas Artes',
        descripcion: 'Importante colección de arte argentino y salteño en el Palacio Usandivaras',
        latitud: -24.7889,
        longitud: -65.4125,
        categoria: 'MUSEO',
      },

      // GOBIERNO
      {
        nombre: 'Casa de Gobierno',
        descripcion: 'Sede del Poder Ejecutivo de la Provincia de Salta, edificio histórico colonial',
        latitud: -24.7897,
        longitud: -65.4103,
        categoria: 'GOBIERNO',
      },
      {
        nombre: 'Municipalidad de Salta',
        descripcion: 'Palacio Municipal - Sede del gobierno de la ciudad de Salta',
        latitud: -24.7922,
        longitud: -65.4112,
        categoria: 'GOBIERNO',
      },

      // ESTADIOS
      {
        nombre: 'Estadio Padre Ernesto Martearena',
        descripcion: 'Principal estadio de fútbol y rugby de la ciudad, sede de eventos deportivos y conciertos.',
        latitud: -24.8012,
        longitud: -65.4234,
        categoria: 'ESTADIO',
      },
      {
        nombre: 'Complejo Deportivo Delmi',
        descripcion: 'Centro deportivo municipal con múltiples disciplinas',
        latitud: -24.7723,
        longitud: -65.4156,
        categoria: 'ESTADIO',
      },

      // MONUMENTOS
      {
        nombre: 'Catedral Basílica de Salta',
        descripcion: 'Importante templo católico del siglo XIX, sede del Arzobispado de Salta',
        latitud: -24.7912,
        longitud: -65.4106,
        categoria: 'MONUMENTO',
      },
      {
        nombre: 'Iglesia San Francisco',
        descripcion: 'Histórica iglesia colonial con torre campanario de 53 metros de altura',
        latitud: -24.7934,
        longitud: -65.4087,
        categoria: 'MONUMENTO',
      },
      {
        nombre: 'Cabildo de Salta',
        descripcion: 'Histórico edificio colonial del siglo XVIII, hoy Centro Cultural',
        latitud: -24.7911,
        longitud: -65.4103,
        categoria: 'MONUMENTO',
      },
    ],
  });

  console.log('✅ Seeding completado: 13 puntos de interés insertados exitosamente');
}

// Ejecutar el script de seeding con manejo de errores
main()
  .then(async () => {
    console.log('🎉 Seeding finalizado correctamente');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('❌ Error durante el seeding:', error);
    await prisma.$disconnect();
    process.exit(1);
  });