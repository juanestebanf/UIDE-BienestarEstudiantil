import Notificacion from '../../data/models/Notificacion.js';
import Solicitud from '../../data/models/Solicitud.js';

class NotificacionService {
    static async obtenerTodas() {
        return await Notificacion.findAll({ include: Solicitud, order: [['fecha_envio', 'DESC']] });
    }

    static async obtenerPorId(id) {
        const noti = await Notificacion.findByPk(id, { include: Solicitud });
        if (!noti) throw new Error('Notificación no encontrada');
        return noti;
    }

    static async obtenerPorSolicitud(solicitud_id) {
        return await Notificacion.findAll({
            where: { solicitud_id },
            order: [['fecha_envio', 'DESC']]
        });
    }

    static async crear(datos) {
        return await Notificacion.create(datos);
    }

    static async actualizar(id, datos) {
        const noti = await Notificacion.findByPk(id);
        if (!noti) throw new Error('Notificación no encontrada');
        await noti.update(datos);
        return noti;
    }

    static async marcarComoLeida(id) {
        const noti = await Notificacion.findByPk(id);
        if (!noti) throw new Error('Notificación no encontrada');
        await noti.update({ leido: true });
        return noti;
    }

    static async eliminar(id) {
        const noti = await Notificacion.findByPk(id);
        if (!noti) throw new Error('Notificación no encontrada');
        await noti.destroy();
        return { mensaje: 'Notificación eliminada correctamente' };
    }
}

export default NotificacionService;