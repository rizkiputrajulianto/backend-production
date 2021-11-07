'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, socmed, Alamat, Class}) {
      // define association here
      Users.belongsTo(socmed, {
        foreignKey: 'idSocmed',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Users.belongsTo(Alamat, {
        foreignKey: 'idAlamat',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Users.belongsToMany(Class, {through: 'joinClass', foreignKey: 'idUsers', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  };
  Users.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    bornDate: DataTypes.DATEONLY,
    photo: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    currentJob: DataTypes.STRING,
    institution: DataTypes.STRING,
    status: DataTypes.ENUM('Admin', 'User'),
    idAlamat: DataTypes.INTEGER,
    idSocmed: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};