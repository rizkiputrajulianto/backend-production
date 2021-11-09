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
      Presensi.belongsTo(joinClass, {foreignKey: 'idUser'});
    }
  };
  Presensi.init({
    idSession: DataTypes.INTEGER,
    idClass: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Presensi',
  });
  return Presensi;
};