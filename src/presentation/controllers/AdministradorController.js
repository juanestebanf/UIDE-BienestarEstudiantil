import AdministradorService from '../../business/services/AdministradorService.js';

class AdministradorController {
    static async obtenerTodos(req, res) {
        try {
            const data = await AdministradorService.obtenerTodos();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await AdministradorService.obtenerPorId(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async crear(req, res) {
        res.status(501).json({ success: false, message: "No implementado" });
    }

    static async actualizar(req, res) {
        res.status(501).json({ success: false, message: "No implementado" });
    }

    static async eliminar(req, res) {
        res.status(501).json({ success: false, message: "No implementado" });
    }
}

export default AdministradorController;