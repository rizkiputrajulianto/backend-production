'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Kecamatan, Alamat, Kota}) {
      // define association here
      Kecamatan.hasMany(Alamat, { foreignKey: 'idKecamatan',as:'alamat', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
      Kecamatan.belongsTo(Kota, { foreignKey: 'idKota',as:'kota', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
    }
  };
  Kecamatan.init({
    namaKecamatan: DataTypes.STRING,
    idKota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kecamatan',
    tableName: 'kecamatan'
  });
  return Kecamatan;
};