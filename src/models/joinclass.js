'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({joinClass, Presensi}) {
      // define association here
      joinClass.hasOne(Presensi, {foreignKey: 'idUser'});
    }
  };
  joinClass.init({
    idUsers: DataTypes.INTEGER,
    idClass: DataTypes.INTEGER,
    role: DataTypes.ENUM('Student', 'Tutor', 'Fasilitator')
  }, {
    sequelize,
    modelName: 'joinClass',
  });
  return joinClass;
};