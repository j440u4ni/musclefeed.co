import Sequelize from 'sequelize';

module.exports = { makePerfumeModel(connection) {
        const Perfume = connection.define('perfume', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, unique: true, allowNull: false }, description: { type: Sequelize.STRING, allowNull: false }
        }, { timestamps: true });
        return Perfume;
    } 
}