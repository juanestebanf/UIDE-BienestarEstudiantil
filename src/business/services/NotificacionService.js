import Notificacion from '../../data/models/Notificacion.js';
import Solicitud from '../../data/models/Solicitud.js';
import Estudiante from '../../data/models/Estudiante.js';
import Usuario from '../../data/models/Usuario.js';
import { Op, col } from 'sequelize';

class NotificacionService {
  static async getNotificaciones(userId, rol) {
    try {
      let whereClause = {};
      if (rol !== 'administrador') {
        whereClause = {
          [Op.and]: [
            { destinatario_rol: 'estudiante' },
            { destinatario_id: userId },
          ],
        };
      } else {
        whereClause = {
          [Op.or]: [
            { destinatario_rol: 'administrador' },
            { destinatario_rol: 'estudiante' },
          ],
        };
      }
      const notificaciones = await Notificacion.findAll({
        where: whereClause,
        include: [
          {
            model: Estudiante,
            as: 'Estudiante',
            attributes: ['id'],
            include: [
              {
                model: Usuario,
                as: 'Usuario',
                attributes: ['nombre_completo', 'correo_institucional'],
              },
            ],
            where: { id: col('Notificacion.destinatario_id') },
            required: false, // LEFT JOIN para notificaciones sin estudiante
          },
          {
            model: Solicitud,
            as: 'Solicitud',
            attributes: ['id', 'subtipo_id', 'nivel_urgencia', 'estado_actual'],
            required: false, // LEFT JOIN para notificaciones sin solicitud
          },
        ],
        order: [['fecha_envio', 'DESC']],
      });
      return notificaciones;
    } catch (error) {
      throw new Error('Error al obtener notificaciones: ' + error.message);
    }
  }

  static async getNotificacionesByUserId(userId) {
    try {
      const notificaciones = await Notificacion.findAll({
        where: {
          [Op.and]: [
            { destinatario_rol: 'estudiante' },
            { destinatario_id: userId },
          ],
        },
        include: [
          {
            model: Estudiante,
            as: 'Estudiante',
            attributes: ['id'],
            include: [
              {
                model: Usuario,
                as: 'Usuario',
                attributes: ['nombre_completo', 'correo_institucional'],
              },
            ],
          },
          {
            model: Solicitud,
            as: 'Solicitud',
            attributes: ['id', 'subtipo_id', 'nivel_urgencia', 'estado_actual'],
            required: false,
          },
        ],
        order: [['fecha_envio', 'DESC']],
      });
      return notificaciones;
    } catch (error) {
      throw new Error('Error al obtener notificaciones por userId: ' + error.message);
    }
  }

  static async markAsRead(notificacionId, userId, rol) {
    try {
      const notificacion = await Notificacion.findOne({
        where: { id: notificacionId },
        include: [{ model: Solicitud, as: 'Solicitud' }],
      });
      if (!notificacion) {
        throw new Error('Notificación no encontrada');
      }
      if (
        rol !== 'administrador' &&
        notificacion.destinatario_rol === 'estudiante' &&
        notificacion.destinatario_id !== userId
      ) {
        throw new Error('No autorizado para marcar esta notificación como leída');
      }
      notificacion.leido = true;
      await notificacion.save();
      return notificacion;
    } catch (error) {
      throw new Error('Error al marcar notificación como leída: ' + error.message);
    }
  }
}

export default NotificacionService;
