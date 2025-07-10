import TipoSolicitudService from '../../business/services/TipoSolicitudService.js';

class TipoSolicitudController {
    static async obtenerTodos(req, res) {
        try {
            const data = await TipoSolicitudService.listar();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async crear(req, res) {
        try {
            const data = await TipoSolicitudService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await TipoSolicitudService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await TipoSolicitudService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const tipo = await TipoSolicitud.findByPk(req.params.id);
            if (!tipo) throw new Error("Tipo de solicitud no encontrado");
            res.json({ success: true, data: tipo });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }
}

export default TipoSolicitudController;