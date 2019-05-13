import Sequelize from 'sequelize';

module.exports = { makePersonModel(connection) {
        const Person = connection.define('person', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            firstname: { type: Sequelize.STRING, allowNull: false },                  lastname: { type: Sequelize.STRING, allowNull: false },
            username: { type: Sequelize.STRING, allowNull: false },                   password: { type: Sequelize.STRING, allowNull: false },
            token: { type: Sequelize.STRING, allowNull: false },                      civility: { type: Sequelize.STRING, allowNull: false  },
            phone: { type: Sequelize.STRING, allowNull: false, unique: true },        email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
            city: { type: Sequelize.STRING, allowNull: true },                       country:{ type:  Sequelize.STRING, allowNull: true },
            main_address: { type: Sequelize.STRING, allowNull: true, unique: true }, secondary_address: { type: Sequelize.STRING, allowNull: true, unique: true },
            is_admin: { type: Sequelize.BOOLEAN, allowNull: true },                  signup_date: { type: Sequelize.DATE, allowNull: true }
        }, { timestamps: true });
        return Person;
    } 
}