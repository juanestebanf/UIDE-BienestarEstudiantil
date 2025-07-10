import UsuarioService from '../../business/services/UsuarioService.js';

class UsuarioController {
    static async registrar(req, res) {
        try {
            const data = await UsuarioService.registrar(req.body);
            res.status(201).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const data = await UsuarioService.login(req.body);
            res.json({ success: true, data });
        } catch (error) {
            res.status(401).json({ success: false, message: error.message });
        }
    }

    static async perfil(req, res) {
        try {
            const usuario = await UsuarioService.obtenerPorId(req.usuario.id);
            res.json({ success: true, data: usuario });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerTodos(req, res) {
        try {
            const data = await UsuarioService.obtenerTodos();
            res.json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

export default UsuarioController;