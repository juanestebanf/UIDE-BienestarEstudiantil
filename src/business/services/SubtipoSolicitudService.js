import SubtipoSolicitud from "../../data/models/SubtipoSolicitud.js";
import TipoSolicitud from "../../data/models/TipoSolicitud.js";

class SubtipoSolicitudService {
    static async crear(data) {
        return await SubtipoSolicitud.create(data);
    }

    static async listar() {
        return await SubtipoSolicitud.findAll({
            include: [{ model: TipoSolicitud }]
        });
    }

    static async obtenerPorId(id) {
        const subtipo = await SubtipoSolicitud.findByPk(id, {
            include: [{ model: TipoSolicitud }]
        });
        if (!subtipo) throw new Error("Subtipo no encontrado");
        return subtipo;
    }

    static async obtenerPorTipo(tipo_id) {
        return await SubtipoSolicitud.findAll({
            where: { tipo_id },
            include: [{ model: TipoSolicitud }]
        });
    }

    static async actualizar(id, data) {
        const subtipo = await SubtipoSolicitud.findByPk(id);
        if (!subtipo) throw new Error("Subtipo no encontrado");
        await subtipo.update(data);
        return subtipo;
    }

    static async eliminar(id) {
        const subtipo = await SubtipoSolicitud.findByPk(id);
        if (!subtipo) throw new Error("Subtipo no encontrado");
        await subtipo.destroy();
        return { mensaje: "Subtipo eliminado correctamente" };
    }
}

export default SubtipoSolicitudService;