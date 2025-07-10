import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import Usuario from './Usuario.js';

const Administrador = sequelize.define('Administrador', {
  id: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: 'Administrador',
  timestamps: false
});

Administrador.belongsTo(Usuario, { foreignKey: 'id', onDelete: 'CASCADE' });
Usuario.hasOne(Administrador, { foreignKey: 'id' });

export default Administrador;