import SolicitudService from '../../business/services/SolicitudService.js';

class SolicitudController {
    static async crear(req, res) {
        try {
            const data = await SolicitudService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await SolicitudService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await SolicitudService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async obtenerTodas(req, res) {
        try {
            const data = await SolicitudService.obtenerTodas();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await SolicitudService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default SolicitudController;