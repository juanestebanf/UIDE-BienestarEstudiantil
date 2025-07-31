import SubtipoSolicitud from '../../data/models/SubtipoSolicitud.js';
import TipoSolicitud from '../../data/models/TipoSolicitud.js';

class SubtipoSolicitudService {
  static async getSubtiposSolicitud() {
    try {
      const subtipos = await SubtipoSolicitud.findAll({
        include: [{ model: TipoSolicitud, attributes: ['nombre'] }],
      });
      return subtipos;
    } catch (error) {
      throw new Error('Error al obtener subtipos de solicitudes: ' + error.message);
    }
  }
}

export default SubtipoSolicitudService;
