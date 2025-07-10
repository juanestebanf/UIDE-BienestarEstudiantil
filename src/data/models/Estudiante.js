import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import Usuario from './Usuario.js';

const Estudiante = sequelize.define('Estudiante', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_completo: { type: DataTypes.STRING(100), allowNull: false },
  cedula: { type: DataTypes.STRING(20), allowNull: false, unique: true },
  matricula: { type: DataTypes.STRING(20), allowNull: false, unique: true },
  telefono: { type: DataTypes.STRING(15), allowNull: false },
  carrera: { 
    type: DataTypes.ENUM(
      'Ingeniería en Tecnologías de la Información', 
      'Arquitectura',
      'Psicología',
      'Marketing', 
      'Derecho', 
      'Business'
    ), 
    allowNull: false 
  },
  semestre: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'Estudiante',
  timestamps: false
});

Estudiante.belongsTo(Usuario, { foreignKey: 'id', onDelete: 'CASCADE' });
Usuario.hasOne(Estudiante, { foreignKey: 'id' });

export default Estudiante;