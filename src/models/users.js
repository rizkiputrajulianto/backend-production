'use strict';
const {
  Model
} = require('sequelize');
const {genSaltSync, hashSync} = require('bcrypt');
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
      Users.belongsToMany(Class, {through: 'joinClass', as: 'Class', foreignKey: 'idUsers', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  };
  Users.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    username: {type:DataTypes.STRING,
      unique: true},
    email:{
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('password', hashSync(value, genSaltSync(10)));
      }
    },
    bornDate: DataTypes.DATEONLY,
    photo: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER(12),
    currentJob: DataTypes.STRING,
    institution: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('Admin', 'User'),
      defaultValue: "User"},
    idAlamat: DataTypes.INTEGER,
    idSocmed: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return Users;
};