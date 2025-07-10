import EstudianteService from '../../business/services/EstudianteService.js';

class EstudianteController {
    static async crear(req, res) {
        try {
            const data = await EstudianteService.crearEstudiante(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async obtenerTodos(req, res) {
        try {
            const data = await EstudianteService.obtenerEstudiantes();
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const data = await EstudianteService.obtenerEstudiantePorId(req.params.id);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const data = await EstudianteService.actualizarEstudiante(req.params.id, req.body);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const data = await EstudianteService.eliminarEstudiante(req.params.id);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default EstudianteController;