// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do router do Express.js
const router = express.Router();

// Importa a função login do arquivo loginController.js
const { login } = require("../controller/loginController");

// Define uma rota POST para o endpoint /login
router.post('/login', login);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;