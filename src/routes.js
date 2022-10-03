const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const VehicleController = require('./controllers/VehiclesController');
const DownloadController = require('./controllers/DownloadController');


// Users
routes.get('/users', UserController.findUsers);
routes.post('/users', UserController.storeUser);

// Adresses
routes.get('/users/:user_id/addresses', AddressController.findAdress);
routes.post('/users/:user_id/addresses', AddressController.storeAddress);

// Vehicles
routes.get('/users/:user_id/vehicles', VehicleController.findVehicles);
routes.post('/users/:user_id/vehicles', VehicleController.storeVehicle);
routes.delete('/users/:user_id/vehicles', VehicleController.deleteVehicle);

// Downloads
routes.get('/downloads', DownloadController.findDownloads);
routes.get('/counts', DownloadController.findCount);
routes.post('/incrementcount', DownloadController.incrementCount);

module.exports = routes;