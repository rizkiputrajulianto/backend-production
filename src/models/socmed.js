'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({socmed, Users}) {
      // define association here
      socmed.hasOne(Users, {
        foreignKey: 'idSocmed',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  socmed.init({
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'socmed',
    tableName: 'socmed'
  });
  return socmed;
};