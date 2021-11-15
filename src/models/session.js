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
    static associate({Session, Class, Materi, joinClass}) {
      // define association here
      Session.belongsTo(Class, {foreignKey: 'idClass', as: 'Class', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
      Session.belongsToMany(joinClass, {through: 'Presensi', foreignKey: 'idSession',as : 'Absensi', onUpdate: 'CASCADE', onDelete: 'CASCADE'});
      Session.hasMany(Materi, {foreignKey: 'idSesi',as: 'Materi',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
    }
  };
  Session.init({
    namaSesi: DataTypes.STRING,
    kodeSesi: DataTypes.STRING(6),
    waktuMulai: DataTypes.DATE,
    waktuSelesai: DataTypes.DATE,
    urutanSesi: DataTypes.INTEGER,
    idClass: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Session',
    tableName: 'session'
  });
  return Session;
};