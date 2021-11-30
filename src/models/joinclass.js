'use strict';
const { Model } = require('sequelize');
const session = require('./session');
module.exports = (sequelize, DataTypes) => {
	class joinClass extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate({ joinClass, Session }) {
			// define association here
			joinClass.belongsToMany(Session, {
				through: 'Presensi',
				as: 'Absen',
				foreignKey: 'idJoinClass',
				sourceKey: 'id'
			});
		}
	}
	joinClass.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			idUsers: DataTypes.UUID,
			idClass: DataTypes.INTEGER,
			role: { type: DataTypes.ENUM('Student', 'Tutor', 'Fasilitator'), defaultValue: 'Student' }
		},
		{
			sequelize,
			modelName: 'joinClass',
			tableName: 'joinClass',
			paranoid: false
		}
	);
	return joinClass;
};
