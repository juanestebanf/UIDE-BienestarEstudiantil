import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Usuario from '../../data/models/Usuario.js';

class UsuarioService {
  static generarToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secreto', {
      expiresIn: process.env.JWT_EXPIRE || '7d',
    });
  }

  static async registrar({ correo_institucional, contrasena, rol }) {
    const existe = await Usuario.findOne({ where: { correo_institucional } });
    if (existe) throw new Error('El correo ya está registrado');
    const hash = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = await Usuario.create({ correo_institucional, contrasena: hash, rol });
    const token = this.generarToken(nuevoUsuario.id);

    return { usuario: { id: nuevoUsuario.id, correo_institucional, rol }, token };
  }

  static async login({ correo_institucional, contrasena }) {
    const usuario = await Usuario.findOne({ where: { correo_institucional } });
    if (!usuario) throw new Error('Correo o contraseña incorrectos');

    const valido = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!valido) throw new Error('Correo o contraseña incorrectos');

    const token = this.generarToken(usuario.id);
    return { usuario: { id: usuario.id, correo_institucional, rol: usuario.rol }, token };
  }

  static async obtenerTodos() {
    return await Usuario.findAll({ attributes: { exclude: ['contrasena'] } });
  }

  static async obtenerPorId(id) {
    const usuario = await Usuario.findByPk(id, { attributes: { exclude: ['contrasena'] } });
    if (!usuario) throw new Error('Usuario no encontrado');
    return usuario;
  }

  static async actualizar(id, datos) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    if (datos.contrasena) {
      datos.contrasena = await bcrypt.hash(datos.contrasena, 10);
    }
    await usuario.update(datos);
    return { mensaje: 'Usuario actualizado correctamente' };
  }

  static async eliminar(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    await usuario.destroy();
    return { mensaje: 'Usuario eliminado' };
  }
}

export default UsuarioService;