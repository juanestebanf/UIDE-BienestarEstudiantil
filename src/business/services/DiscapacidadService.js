import Discapacidad from '../../data/models/Discapacidad.js';
import Estudiante from '../../data/models/Estudiante.js';

class DiscapacidadService {
    static async obtenerTodas() {
        return await Discapacidad.findAll({ include: Estudiante });
    }

    static async obtenerPorId(id) {
        const discapacidad = await Discapacidad.findByPk(id, { include: Estudiante });
        if (!discapacidad) throw new Error('No se encontró información de discapacidad');
        return discapacidad;
    }

    static async obtenerPorEstudiante(estudiante_id) {
        const discapacidad = await Discapacidad.findOne({ where: { estudiante_id }, include: Estudiante });
        if (!discapacidad) throw new Error('No se encontró información de discapacidad');
        return discapacidad;
    }

    static async crear(datos) {
        return await Discapacidad.create(datos);
    }

    static async actualizar(id, datos) {
        const discapacidad = await Discapacidad.findByPk(id);
        if (!discapacidad) throw new Error('No se encontró información de discapacidad');
        await discapacidad.update(datos);
        return discapacidad;
    }

    static async eliminar(id) {
        const discapacidad = await Discapacidad.findByPk(id);
        if (!discapacidad) throw new Error('No se encontró información de discapacidad');
        await discapacidad.destroy();
        return { mensaje: 'Registro eliminado correctamente' };
    }
}

export default DiscapacidadService;