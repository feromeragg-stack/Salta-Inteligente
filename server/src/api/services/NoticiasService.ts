import { GoogleGenerativeAI } from '@google/generative-ai';

interface Noticia {
  titulo: string;
  resumen: string;
  fuente: string;
  url: string;
  fechaPublicacion?: string;
}

interface NoticiasResponse {
  noticias: Noticia[];
  resumenGeneral: string;
  fechaConsulta: string;
}

class NoticiasService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
    } else {
      console.warn('⚠️  GEMINI_API_KEY no configurada. Las noticias usarán datos de ejemplo.');
    }
  }

  /**
   * Obtiene noticias ambientales usando Gemini AI con Google Search
   */
  async obtenerNoticiasAmbientales(): Promise<NoticiasResponse> {
    if (!this.genAI) {
      return this.obtenerNoticiasEjemplo();
    }

    try {
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-pro",
        generationConfig: {
          temperature: 0.3,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      });

      const prompt = `
Busca las 3 noticias más recientes sobre medio ambiente, ecología o sostenibilidad específicamente en Salta, Argentina.

Para cada noticia, necesito:
- Título exacto de la noticia
- Resumen de 2-3 oraciones (máximo 150 palabras)
- Nombre de la fuente/medio (diario, sitio web, etc.)
- URL completa de la noticia
- Fecha de publicación (formato DD/MM/AAAA si está disponible)

También proporciona un resumen general de 50-80 palabras sobre las tendencias ambientales actuales en Salta basado en estas noticias.

IMPORTANTE: 
- Solo noticias reales y verificables
- Priorizar noticias de los últimos 30 días
- Incluir fuentes confiables como diarios locales, sitios gubernamentales, ONGs
- Si no encuentras 3 noticias específicas de Salta, incluye noticias de Argentina relacionadas con temas ambientales

Responde en formato JSON exactamente así:
{
  "noticias": [
    {
      "titulo": "Título exacto de la noticia",
      "resumen": "Resumen de la noticia...",
      "fuente": "Nombre del medio",
      "url": "https://...",
      "fechaPublicacion": "DD/MM/AAAA"
    }
  ],
  "resumenGeneral": "Resumen general de las tendencias...",
  "fechaConsulta": "${new Date().toISOString()}"
}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Intentar parsear la respuesta JSON
      try {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('No se encontró JSON válido en la respuesta');
        }

        const noticiasData = JSON.parse(jsonMatch[0]);
        
        // Validar estructura
        if (!noticiasData.noticias || !Array.isArray(noticiasData.noticias)) {
          throw new Error('Estructura de respuesta inválida');
        }

        return {
          ...noticiasData,
          fechaConsulta: new Date().toISOString()
        };

      } catch (parseError) {
        console.error('Error al parsear respuesta de Gemini:', parseError);
        return this.obtenerNoticiasEjemplo();
      }

    } catch (error) {
      console.error('Error al obtener noticias con Gemini:', error);
      return this.obtenerNoticiasEjemplo();
    }
  }

  /**
   * Datos de ejemplo para cuando no hay API key configurada o hay errores
   */
  private obtenerNoticiasEjemplo(): NoticiasResponse {
    return {
      noticias: [
        {
          titulo: "Nueva área protegida en los Valles Calchaquíes salteños",
          resumen: "El gobierno provincial anunció la creación de una nueva reserva natural que protegerá más de 10,000 hectáreas de ecosistemas únicos en la región. La medida busca preservar la biodiversidad local y promover el ecoturismo sustentable. La iniciativa contó con el apoyo de organizaciones ambientales locales.",
          fuente: "El Tribuno Salta",
          url: "https://www.eltribuno.com/salta",
          fechaPublicacion: "28/10/2025"
        },
        {
          titulo: "Programa de reciclaje urbano alcanza el 40% de participación ciudadana",
          resumen: "La Municipalidad de Salta reportó un incremento significativo en la participación ciudadana en programas de separación de residuos. Se instalaron 50 nuevos puntos de reciclaje en diferentes barrios de la ciudad. El programa ha logrado procesar más de 200 toneladas de materiales reciclables en lo que va del año.",
          fuente: "Salta21",
          url: "https://www.salta21.com",
          fechaPublicacion: "26/10/2025"
        },
        {
          titulo: "Energía solar: Salta lidera inversión en renovables del NOA",
          resumen: "La provincia se posiciona como líder regional en inversión en energías renovables, con tres nuevos parques solares en construcción. Los proyectos generarán energía limpia para más de 100,000 hogares y crearán empleos verdes. La iniciativa forma parte del plan provincial de transición energética hacia 2030.",
          fuente: "InformateSalta",
          url: "https://www.informatesalta.com.ar",
          fechaPublicacion: "25/10/2025"
        }
      ],
      resumenGeneral: "Salta demuestra un compromiso creciente con la sostenibilidad ambiental a través de nuevas áreas protegidas, programas de reciclaje exitosos y liderazgo en energías renovables. Las iniciativas gubernamentales y la participación ciudadana están convergiendo hacia un modelo de desarrollo más sustentable para la provincia.",
      fechaConsulta: new Date().toISOString()
    };
  }

  /**
   * Verifica si la API de Gemini está disponible
   */
  isApiDisponible(): boolean {
    return this.genAI !== null;
  }
}

export default NoticiasService;