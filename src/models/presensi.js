'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Presensi, joinClass}) {
      // define association here
    }
  };
  Presensi.init({
    idSession: DataTypes.INTEGER,
    idJoinClass: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Presensi',
    tableName: 'presensi'
  });
  return Presensi;
};