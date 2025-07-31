import SubtipoSolicitudService from '../../business/services/SubtipoSolicitudService.js';

class SubtipoSolicitudController {
  static async getSubtiposSolicitud(req, res) {
    try {
      const subtipos = await SubtipoSolicitudService.getSubtiposSolicitud();
      res.status(200).json({
        message: 'Subtipos de solicitud obtenidos exitosamente',
        data: subtipos,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Error interno del servidor',
        code: 'SERVER_ERROR',
        message: error.message,
        details: [],
      });
    }
  }
}

export default SubtipoSolicitudController;
