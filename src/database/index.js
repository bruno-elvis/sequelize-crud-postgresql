const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/Users');
const Address = require('../models/Address');
const Download = require('../models/Downloads');
const Vehicle = require('../models/Vehicles');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Vehicle.init(connection);
Download.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Vehicle.associate(connection.models);

module.exports = connection;
