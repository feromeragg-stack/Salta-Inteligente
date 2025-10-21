import app from "./app";
import config from "./config";

/**
 * Punto de entrada del servidor Salta-Inteligente
 * Inicializa la aplicación Express y maneja el arranque del servidor
 */

/**
 * Función para inicializar el servidor
 * Incluye manejo de errores de arranque y logging informativo
 */
const startServer = async (): Promise<void> => {
  try {
    // Intentar iniciar el servidor en el puerto configurado
    const server = app.listen(config.port, () => {
      console.log("🚀 ========================================");
      console.log("🏛️  SALTA-INTELIGENTE API SERVER");
      console.log("🚀 ========================================");
      console.log(`🌐 Servidor ejecutándose en puerto: ${config.port}`);
      console.log(`🌍 Entorno: ${config.nodeEnv}`);
      console.log(`📍 URL local: http://localhost:${config.port}`);
      console.log(`💚 Health check: http://localhost:${config.port}/health`);
      console.log(`📊 API docs: http://localhost:${config.port}/api`);
      console.log("🚀 ========================================");

      if (config.nodeEnv === "development") {
        console.log("🔧 Modo desarrollo activado");
        console.log("📝 Logs detallados habilitados");
        console.log("🔄 Reinicio automático con tsx watch");
      }
    });

    // Configuración del servidor para graceful shutdown
    process.on("SIGTERM", () => {
      console.log("🛑 SIGTERM recibido. Cerrando servidor gracefully...");
      server.close(() => {
        console.log("✅ Servidor cerrado correctamente");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log(
        "🛑 SIGINT recibido (Ctrl+C). Cerrando servidor gracefully..."
      );
      server.close(() => {
        console.log("✅ Servidor cerrado correctamente");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("❌ Error fatal al iniciar el servidor:");
    console.error(error);
    process.exit(1);
  }
};

/**
 * Manejo de errores no capturados
 * Previene que la aplicación se cierre inesperadamente
 */
process.on("uncaughtException", (error: Error) => {
  console.error("❌ Excepción no capturada:", error);
  console.error("🔥 La aplicación se cerrará por seguridad");
  process.exit(1);
});

process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    console.error("❌ Promise rechazada no manejada en:", promise);
    console.error("❌ Razón:", reason);
    console.error("🔥 La aplicación se cerrará por seguridad");
    process.exit(1);
  }
);

// Inicializar el servidor
startServer();
