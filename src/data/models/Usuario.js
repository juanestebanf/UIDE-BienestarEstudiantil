import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import { sequelize } from '../database.js';

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  correo_institucional: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  rol: {
    type: DataTypes.ENUM('estudiante', 'administrador'),
    allowNull: false
  }
}, {
  tableName: 'Usuario',
  timestamps: false,
  hooks: {
    beforeCreate: async (usuario) => {
      if (usuario.contrasena) {
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, 12);
      }
    },
    beforeUpdate: async (usuario) => {
      if (usuario.changed('contrasena')) {
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, 12);
      }
    }
  }
});

// Metodo para comparar contraseñas de manera segura
Usuario.prototype.compararPassword = async function (password) {
  return await bcrypt.compare(password, this.contrasena);
};

// Metodo para devolver el usuario excluyendo la contraseña
Usuario.prototype.toSafeJSON = function () {
  const { contrasena, ...resto } = this.toJSON();
  return resto;
};

export default Usuario;