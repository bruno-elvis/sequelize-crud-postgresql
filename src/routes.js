const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.findUsers);

routes.post('/users', UserController.storeUser);

module.exports = routes;