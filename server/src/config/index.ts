import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

interface Config {
  port: number;
  databaseUrl: string;
  nodeEnv: string;
}

/**
 * Configuración centralizada de la aplicación
 * Maneja todas las variables de entorno con valores por defecto seguros
 */
const config: Config = {
  // Puerto del servidor - por defecto 3001 para desarrollo
  port: parseInt(process.env.PORT || '3001', 10),
  
  // URL de conexión a la base de datos PostgreSQL
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost:5432/salta_inteligente',
  
  // Entorno de ejecución (development, production, test)
  nodeEnv: process.env.NODE_ENV || 'development',
};

/**
 * Validación de configuración crítica
 * Termina la aplicación si faltan variables esenciales
 */
const validateConfig = (): void => {
  if (!process.env.DATABASE_URL && config.nodeEnv === 'production') {
    console.error('❌ ERROR: DATABASE_URL es requerida en producción');
    process.exit(1);
  }
  
  if (isNaN(config.port) || config.port < 1 || config.port > 65535) {
    console.error('❌ ERROR: PORT debe ser un número válido entre 1 y 65535');
    process.exit(1);
  }
  
  console.log(`✅ Configuración cargada - Entorno: ${config.nodeEnv} | Puerto: ${config.port}`);
};

// Ejecutar validación al importar el módulo
validateConfig();

export default config;