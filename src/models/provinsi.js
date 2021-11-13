'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provinsi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Provinsi, Kota}) {
      // define association here
      Provinsi.hasMany(Kota, { foreignKey: 'idProvinsi', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
    }
  };
  Provinsi.init({
    namaProvinsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provinsi',
    tableName: 'provinsi'
  });
  return Provinsi;
};