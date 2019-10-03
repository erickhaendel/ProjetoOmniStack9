// Importações
const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');

// Roteador do express
const routes = express.Router();
const upload = multer(uploadConfig);

// Controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

// Rotas
routes.post("/users", SessionController.store);

routes.get("/dashboard", DashboardController.index);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.post("/spots/:spot_id/booking", BookingController.store);

module.exports = routes;