// Setting up our database connection
const Sequelize = require('sequelize');
const config = new Sequelize("my_school", "myRoot", "password", {dialect:'mysql'});

module.exports = config;