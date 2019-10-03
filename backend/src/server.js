// Importações
const express = require("express");
const mongoose = require("mongoose");
const keys = require('./config/keys');
// Rotas
const routes = require("./routes");
// Aplicação
const app = express();
mongoose.connect(keys.mongoose, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// Configurações
app.use(express.json());
app.use(routes);
app.listen(3333);