import Estudiante from "../../data/models/Estudiante.js";
import Usuario from "../../data/models/Usuario.js";

class EstudianteService {
    static async crearEstudiante(datos) {
        return await Estudiante.create(datos);
    }

    static async obtenerEstudiantes() {
        return await Estudiante.findAll({
            include: [{ model: Usuario, attributes: { exclude: ['contrasena'] } }]
        });
    }

    static async obtenerEstudiantePorId(id) {
        const estudiante = await Estudiante.findByPk(id, {
            include: [{ model: Usuario, attributes: { exclude: ['contrasena'] } }]
        });
        if (!estudiante) throw new Error("Estudiante no encontrado");
        return estudiante;
    }

    static async actualizarEstudiante(id, datos) {
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) throw new Error("Estudiante no encontrado");
        await estudiante.update(datos);
        return estudiante;
    }

    static async eliminarEstudiante(id) {
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) throw new Error("Estudiante no encontrado");
        await estudiante.destroy();
        return { mensaje: "Estudiante eliminado correctamente" };
    }
}

export default EstudianteService;