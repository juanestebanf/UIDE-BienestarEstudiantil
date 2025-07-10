import Solicitud from '../../data/models/Solicitud.js';
import SubtipoSolicitud from '../../data/models/SubtipoSolicitud.js';
import Estudiante from '../../data/models/Estudiante.js';

class SolicitudService {
    static async obtenerTodas() {
        return await Solicitud.findAll({ include: [Estudiante, SubtipoSolicitud] });
    }

    static async obtenerPorId(id) {
        const solicitud = await Solicitud.findByPk(id, {
            include: [Estudiante, SubtipoSolicitud]
        });
        if (!solicitud) throw new Error('Solicitud no encontrada');
        return solicitud;
    }

    static async crear(datos) {
        return await Solicitud.create(datos);
    }

    static async actualizar(id, datos) {
        const solicitud = await Solicitud.findByPk(id);
        if (!solicitud) throw new Error('Solicitud no encontrada');
        await solicitud.update(datos);
        return solicitud;
    }

    static async eliminar(id) {
        const solicitud = await Solicitud.findByPk(id);
        if (!solicitud) throw new Error('Solicitud no encontrada');
        await solicitud.destroy();
        return { mensaje: 'Solicitud eliminada correctamente' };
    }
}

export default SolicitudService;