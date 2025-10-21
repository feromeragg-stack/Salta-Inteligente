import { PrismaClient } from '@prisma/client';

/**
 * Instancia única de PrismaClient para toda la aplicación
 * Se reutiliza en todos los servicios para evitar múltiples conexiones
 */
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

/**
 * Configuración de cierre graceful de Prisma
 * Asegura que las conexiones se cierren correctamente al terminar la aplicación
 */
process.on('beforeExit', async () => {
  console.log('🔌 Cerrando conexión con la base de datos...');
  await prisma.$disconnect();
});

// Exportar la instancia única de Prisma
export default prisma;