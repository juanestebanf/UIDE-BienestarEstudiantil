import Administrador from "../../data/models/Administrador.js";
import Usuario from "../../data/models/Usuario.js";

class AdministradorService {
    static async obtenerTodos() {
        return await Administrador.findAll({
            include: [{ model: Usuario, attributes: { exclude: ['contrasena'] } }]
        });
    }

    static async obtenerPorId(id) {
        const admin = await Administrador.findByPk(id, {
            include: [{ model: Usuario, attributes: { exclude: ['contrasena'] } }]
        });
        if (!admin) throw new Error("Administrador no encontrado");
        return admin;
    }
}

export default AdministradorService;