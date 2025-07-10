import NotificacionService from '../../business/services/NotificacionService.js';

class NotificacionController {
    static async crear(req, res) {
        try {
            const data = await NotificacionService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async obtenerTodas(req, res) {
        try {
            const data = await NotificacionService.obtenerTodas();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await NotificacionService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorSolicitud(req, res) {
        try {
            const data = await NotificacionService.obtenerPorSolicitud(req.params.solicitud_id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await NotificacionService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async marcarComoLeida(req, res) {
        try {
            const data = await NotificacionService.marcarComoLeida(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await NotificacionService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default NotificacionController;