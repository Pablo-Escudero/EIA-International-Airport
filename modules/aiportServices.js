'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirportService extends Model {
    static associate(models) {}
  }
  AirportService.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AirportService',
  });
  return AirportService;
};
