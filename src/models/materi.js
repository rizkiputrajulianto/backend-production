'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Materi, Session}) {
      // define association here
      Materi.hasMany(Session, {foreignKey: 'idMateri', as: 'Session'});
    }
  };
  Materi.init({
    namaMateri: DataTypes.STRING,
    file: DataTypes.STRING,
    jenisMateri: DataTypes.ENUM('Recording', 'Materi')
  }, {
    sequelize,
    modelName: 'Materi',
    tableName: 'materi'
  });
  return Materi;
};