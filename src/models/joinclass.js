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
    static associate(models) {
      // define association here
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