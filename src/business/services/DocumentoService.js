import Documento from '../../data/models/Documento.js';
import Solicitud from '../../data/models/Solicitud.js';

class DocumentoService {
    static async obtenerTodos() {
        return await Documento.findAll({ include: Solicitud });
    }

    static async obtenerPorId(id) {
        const doc = await Documento.findByPk(id, { include: Solicitud });
        if (!doc) throw new Error('Documento no encontrado');
        return doc;
    }

    static async obtenerPorSolicitud(solicitud_id) {
        return await Documento.findAll({ 
            where: { solicitud_id },
            include: Solicitud
        });
    }

    static async crear(datos) {
        return await Documento.create(datos);
    }

    static async actualizar(id, datos) {
        const doc = await Documento.findByPk(id);
        if (!doc) throw new Error('Documento no encontrado');
        await doc.update(datos);
        return doc;
    }

    static async eliminar(id) {
        const doc = await Documento.findByPk(id);
        if (!doc) throw new Error('Documento no encontrado');
        await doc.destroy();
        return { mensaje: 'Documento eliminado correctamente' };
    }
}

export default DocumentoService;