import TipoSolicitud from "../../data/models/TipoSolicitud.js";

class TipoSolicitudService {
    static async crear(data) {
        return await TipoSolicitud.create(data);
    }

    static async listar() {
        return await TipoSolicitud.findAll();
    }

    static async actualizar(id, data) {
        const tipo = await TipoSolicitud.findByPk(id);
        if (!tipo) throw new Error("Tipo de solicitud no encontrado");
        await tipo.update(data);
        return tipo;
    }

    static async eliminar(id) {
        const tipo = await TipoSolicitud.findByPk(id);
        if (!tipo) throw new Error("Tipo de solicitud no encontrado");
        await tipo.destroy();
        return { mensaje: "Tipo de solicitud eliminado correctamente" };
    }
}

export default TipoSolicitudService;