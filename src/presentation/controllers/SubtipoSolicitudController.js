import SubtipoSolicitudService from '../../business/services/SubtipoSolicitudService.js';

class SubtipoSolicitudController {
    static async obtenerTodos(req, res) {
        try {
            const data = await SubtipoSolicitudService.listar();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await SubtipoSolicitudService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorTipo(req, res) {
        try {
            const data = await SubtipoSolicitudService.obtenerPorTipo(req.params.tipo_id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async crear(req, res) {
        try {
            const data = await SubtipoSolicitudService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await SubtipoSolicitudService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await SubtipoSolicitudService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default SubtipoSolicitudController;