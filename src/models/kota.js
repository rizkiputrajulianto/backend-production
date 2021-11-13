'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Kota, Kecamatan, Provinsi}) {
      // define association here
      Kota.hasMany(Kecamatan, {foreignKey: 'idKota', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
      Kota.belongsTo(Provinsi, {foreignKey: 'idProvinsi', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
    }
  };
  Kota.init({
    namaKota: DataTypes.STRING,
    idProvinsi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kota',
    tableName: 'kota'
  });
  return Kota;
};