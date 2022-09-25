const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const DownloadController = require('./controllers/DownloadController');

routes.get('/users', UserController.findUsers);

routes.get('/downloads', DownloadController.findDownloads);

routes.get('/counts', DownloadController.findCount);

routes.post('/users', UserController.storeUser);

routes.post('/users/:user_id/addresses', AddressController.storeAddress);

routes.post('/incrementcount', DownloadController.incrementCount);

module.exports = routes;