'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baggage extends Model {
    static associate(models) {}
  }
  Baggage.init({
    tagNumber: DataTypes.STRING,
    passengerId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Baggage',
  });
  return Baggage;
};
