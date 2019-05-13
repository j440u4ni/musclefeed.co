import Sequelize from 'sequelize';

module.exports = { makeProductModel(connection) {
        const Product = connection.define('product', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            title: { type: Sequelize.STRING, allowNull: false, unique: true },      description_title: { type: Sequelize.STRING, allowNull: false, unique: true },
            description: { type: Sequelize.TEXT, allowNull: false },  
        }, { timestamps: true });
        return Product;
    } 
}