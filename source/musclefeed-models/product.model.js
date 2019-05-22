import Sequelize from 'sequelize';

module.exports = { makeProductModel(connection) {
        const Product = connection.define('product', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            title: { type: Sequelize.STRING, allowNull: false, unique: true, required: true }, description_title: { type: Sequelize.STRING, allowNull: false, unique: true, required: true },
            description: { type: Sequelize.TEXT, allowNull: false, required: true }, details: { type: Sequelize.TEXT, allowNull: false }, provider: { type: Sequelize.STRING, allowNull: false, unique: true, required: true },
            quantity: { type: Sequelize.INTEGER, allowNull: false, required: true }, image: { type: Sequelize.TEXT('long'), allowNull: false, required: true }
        }, { timestamps: true });
        return Product;
    } 
}