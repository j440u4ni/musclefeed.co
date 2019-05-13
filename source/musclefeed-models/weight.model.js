import Sequelize from 'sequelize';

module.exports = { makeWeightModel(connection) {
        const Weight = connection.define('weight', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, unique: true, allowNull: false }, value: { type: Sequelize.INTEGER, allowNull: false }
        }, { timestamps: true });
        return Weight;
    } 
}