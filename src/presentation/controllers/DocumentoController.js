import DocumentoService from '../../business/services/DocumentoService.js';

class DocumentoController {
    static async obtenerTodos(req, res) {
        try {
            const data = await DocumentoService.obtenerTodos();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await DocumentoService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorSolicitud(req, res) {
        try {
            const data = await DocumentoService.obtenerPorSolicitud(req.params.solicitud_id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async crear(req, res) {
        try {
            const data = await DocumentoService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await DocumentoService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await DocumentoService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default DocumentoController;