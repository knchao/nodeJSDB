const Sequelize = require('sequelize');
const config = require('./../config');

const Student = config.define('Student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    section: {
        type: Sequelize.STRING,
        allowNull: false
    },
 
    gpa: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },

    nationality: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Student;
