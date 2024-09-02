// Importa o módulo Router do Express.js
const { Router } = require('express');

// Cria uma instância do router do Express.js
const router = Router();

// Importa a função storeUser do arquivo userController.js
const { storeUser } = require('../controller/userController');

// Define uma rota POST para o endpoint /user/create
// Quando essa rota for acessada via método POST, a função storeUser será chamada
router.post('/user/create', storeUser);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;