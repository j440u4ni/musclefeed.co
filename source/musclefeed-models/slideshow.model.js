import Sequelize from 'sequelize';

module.exports = { makeSlideshowModel(connection) {
        const Slideshow = connection.define('slideshow', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, unique: true, allowNull: false }, image: { type: Sequelize.TEXT('long'), allowNull: false }
        }, { timestamps: true });
        return Slideshow;
    } 
}