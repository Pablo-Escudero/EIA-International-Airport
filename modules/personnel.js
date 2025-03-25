'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personnel extends Model {
    static associate(models) {}
  }
  Personnel.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    department: DataTypes.STRING,
    contactInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personnel',
  });
  return Personnel;
};
