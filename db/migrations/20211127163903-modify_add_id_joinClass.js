'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn('joinClass', 'id', {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true
			})
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return Promise.all([ queryInterface.removeColumn('joinClass', 'id') ]);
	}
};
