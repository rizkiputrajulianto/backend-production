'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alamat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Alamat, Users, Kecamatan}) {
      // define association here
      Alamat.hasOne(Users, { foreignKey: 'idAlamat', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
      Alamat.belongsTo(Kecamatan, { foreignKey: 'idKecamatan', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
    }
  };
  Alamat.init({
    namaAlamat: DataTypes.STRING,
    idKecamatan: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Alamat',
  });
  return Alamat;
};