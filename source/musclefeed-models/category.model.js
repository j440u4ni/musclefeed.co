import Sequelize from 'sequelize';

module.exports = { makeCategoryModel(connection) {
        const Category = connection.define('category', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, unique: true, allowNull: false }, description: { type: Sequelize.TEXT, allowNull: false } 
        }, { timestamps: true });
        return Category;
    } 
}