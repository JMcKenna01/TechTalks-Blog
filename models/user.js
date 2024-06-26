const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Include other attributes such as email, password etc.
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
});

module.exports = User;
