import Discapacidad from '../../data/models/Discapacidad.js';
import Estudiante from '../../data/models/Estudiante.js';
import Usuario from '../../data/models/Usuario.js';

class DiscapacidadService {
  static async createDiscapacidad(userId, data, fileUrl) {
    try {
      const existingDiscapacidad = await Discapacidad.findOne({
        where: { estudiante_id: userId },
      });
      if (existingDiscapacidad) {
        throw new Error('Ya existe una discapacidad registrada para este estudiante');
      }
      const discapacidad = await Discapacidad.create({
        estudiante_id: userId,
        tipo: data.tipo,
        carnet_conadis: data.carnet_conadis,
        informe_medico: fileUrl,
      });
      return discapacidad;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getDiscapacidad(userId, rol) {
    try {
      if (rol === 'administrador') {
        const discapacidades = await Discapacidad.findAll({
          include: [
            {
              model: Estudiante,
              as: 'Estudiante',
              attributes: ['id'],
              include: [
                {
                  model: Usuario,
                  as: 'Usuario',
                  attributes: ['nombre_completo'],
                },
              ],
            },
          ],
        });
        return discapacidades;
      }
      const discapacidad = await Discapacidad.findOne({
        where: { estudiante_id: userId },
        include: [
          {
            model: Estudiante,
            as: 'Estudiante',
            attributes: ['id'],
            include: [
              {
                model: Usuario,
                as: 'Usuario',
                attributes: ['nombre_completo'],
              },
            ],
          },
        ],
      });
      return discapacidad;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateDiscapacidad(userId, data, fileUrl) {
    try {
      const discapacidad = await Discapacidad.findOne({
        where: { estudiante_id: userId },
      });
      if (!discapacidad) {
        throw new Error('No se encontró ninguna discapacidad para actualizar');
      }
      await discapacidad.update({
        tipo: data.tipo,
        carnet_conadis: data.carnet_conadis,
        informe_medico: fileUrl || discapacidad.informe_medico,
      });
      return discapacidad;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default DiscapacidadService;
