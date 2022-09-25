const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/Users');
const Address = require('../models/Address');
const Download = require('../models/Downloads');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Download.init(connection);

Address.associate(connection.models);

module.exports = connection;
