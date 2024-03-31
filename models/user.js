const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  // Method to check password
}

User.init({
  // define columns
}, {
  sequelize,
  hooks: {
    // beforeCreate lifecycle hook to hash password
  }
});

module.exports = User;
