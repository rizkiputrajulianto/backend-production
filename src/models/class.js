'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Class, Users, Session}) {
      // define association here
      Class.belongsToMany(Users, {
        through: 'joinClass',
        as: 'Users',
        foreignKey: 'idClass',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      Class.hasMany(Session, {
        foreignKey: 'idClass',
        as: 'Sessions',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  };
  Class.init({
    namaKelas: DataTypes.STRING,
    kodeKelas: DataTypes.STRING(6),
    tanggalMulai: DataTypes.DATEONLY,
    tanggalSelesai: DataTypes.DATEONLY,
    deskripsi: DataTypes.TEXT,
    fotoKelas: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'class'
  });
  return Class;
};