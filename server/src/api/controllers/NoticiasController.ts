import { Request, Response } from 'express';
import NoticiasService from '../services/NoticiasService';

class NoticiasController {
  private noticiasService: NoticiasService;

  constructor() {
    this.noticiasService = new NoticiasService();
  }

  /**
   * GET /api/noticias/ambientales
   * Obtiene las últimas noticias ambientales de Salta
   */
  obtenerNoticiasAmbientales = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log('📰 Solicitando noticias ambientales...');
      
      const noticias = await this.noticiasService.obtenerNoticiasAmbientales();
      
      console.log(`✅ Se obtuvieron ${noticias.noticias.length} noticias`);
      
      res.status(200).json(noticias);
    } catch (error) {
      console.error('❌ Error en NoticiasController.obtenerNoticiasAmbientales:', error);
      
      res.status(500).json({
        error: 'Error interno del servidor',
        message: 'No se pudieron obtener las noticias ambientales',
        timestamp: new Date().toISOString()
      });
    }
  };

  /**
   * GET /api/noticias/estado
   * Verifica el estado de la API de noticias
   */
  obtenerEstadoApi = async (req: Request, res: Response): Promise<void> => {
    try {
      const estado = {
        servicio: 'Noticias Ambientales',
        estado: 'activo',
        geminiDisponible: this.noticiasService.isApiDisponible(),
        timestamp: new Date().toISOString(),
        version: '1.0.0'
      };
      
      res.status(200).json(estado);
    } catch (error) {
      console.error('❌ Error al verificar estado de API de noticias:', error);
      
      res.status(500).json({
        error: 'Error al verificar estado del servicio',
        timestamp: new Date().toISOString()
      });
    }
  };
}

export default NoticiasController;