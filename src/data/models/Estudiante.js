import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Usuario from './Usuario.js';

const Estudiante = sequelize.define('Estudiante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cedula: {
    type: DataTypes.STRING(20),
    unique: 'cedula_unique', 
    allowNull: false,
    validate: {
      is: /^\d{10}$/,
    },
  },
  matricula: {
    type: DataTypes.STRING(20),
    unique: 'matricula_unique', 
    allowNull: false,
    validate: {
      is: /^U\d{6}$/,
    },
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      is: /^\d{9,10}$/,
    },
  },
  carrera: {
    type: DataTypes.ENUM(
      'Ingeniería en Tecnologías de la Información',
      'Arquitectura',
      'Psicología',
      'Marketing',
      'Derecho',
      'Business'
    ),
    allowNull: false,
  },
  semestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 8,
    },
  },
}, {
  tableName: 'Estudiante',
  timestamps: false,
  indexes: [
    { unique: true, name: 'cedula_unique', fields: ['cedula'] },
    { unique: true, name: 'matricula_unique', fields: ['matricula'] },
  ],
});

Estudiante.belongsTo(Usuario, { foreignKey: 'id', constraints: false }); 
Usuario.hasOne(Estudiante, { foreignKey: 'id', constraints: false });

export default Estudiante;
