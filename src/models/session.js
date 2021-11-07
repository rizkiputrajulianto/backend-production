'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Session, Class, Materi}) {
      // define association here
      Session.belongsTo(Class, {foreignKey: 'idClass', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
      Session.belongsToMany(Class, {through: 'presensi', foreignKey: 'idSession', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
      Session.belongsTo(Materi, {foreignKey: 'idMateri', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
    }
  };
  Session.init({
    namaSesi: DataTypes.STRING,
    kodeSesi: DataTypes.STRING(6),
    waktuMulai: DataTypes.DATE,
    waktuSelesai: DataTypes.DATE,
    urutanSesi: DataTypes.INTEGER,
    idClass: DataTypes.INTEGER,
    idMateri: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};