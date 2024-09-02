// Importa o módulo Router do Express.js
const { Router } = require('express');

// Cria uma instância do router do Express.js
const router = Router();

// Importa a função storeGamemind do arquivo taskController.js
const { storeGamemind } = require('../controller/taskController');

// Define uma rota POST para o endpoint /store/gamemind
// Quando essa rota for acessada via método POST, a função storeGamemind será chamada
router.post('/store/gamemind', storeGamemind);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;