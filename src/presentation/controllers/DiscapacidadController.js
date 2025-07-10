import DiscapacidadService from '../../business/services/DiscapacidadService.js';

class DiscapacidadController {
    static async obtenerTodas(req, res) {
        try {
            const data = await DiscapacidadService.obtenerTodas();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await DiscapacidadService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorEstudiante(req, res) {
        try {
            const data = await DiscapacidadService.obtenerPorEstudiante(req.params.estudiante_id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async crear(req, res) {
        try {
            const data = await DiscapacidadService.crear(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await DiscapacidadService.actualizar(req.params.id, req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await DiscapacidadService.eliminar(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default DiscapacidadController;