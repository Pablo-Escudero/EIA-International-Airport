'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    static associate(models) {}
  }
  Passenger.init({
    name: DataTypes.STRING,
    idNumber: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
    preferences: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};
