import HistorialEstado from '../../data/models/HistorialEstado.js';
import Administrador from '../../data/models/Administrador.js';
import Solicitud from '../../data/models/Solicitud.js';

class HistorialEstadoService {
    static async obtenerTodos() {
        return await HistorialEstado.findAll({
            include: [Administrador, Solicitud],
            order: [['fecha', 'DESC']]
        });
    }

    static async obtenerPorSolicitud(solicitud_id) {
        return await HistorialEstado.findAll({
            where: { solicitud_id },
            include: [Administrador],
            order: [['fecha', 'DESC']]
        });
    }

    static async obtenerPorId(id) {
        const registro = await HistorialEstado.findByPk(id, {
            include: [Administrador, Solicitud]
        });
        if (!registro) throw new Error('Registro de historial no encontrado');
        return registro;
    }

    static async crear(datos) {
        return await HistorialEstado.create(datos);
    }

    static async actualizar(id, datos) {
        const registro = await HistorialEstado.findByPk(id);
        if (!registro) throw new Error('Registro de historial no encontrado');
        await registro.update(datos);
        return registro;
    }

    static async eliminar(id) {
        const registro = await HistorialEstado.findByPk(id);
        if (!registro) throw new Error('Registro de historial no encontrado');
        await registro.destroy();
        return { mensaje: "Registro de historial eliminado correctamente" };
    }
}

export default HistorialEstadoService;