// Importa o módulo Router do Express.js
const { Router } = require('express');

// Cria uma instância do router do Express.js
const router = Router();

// Importa a função storeGamemind do arquivo taskController.js
const { storeGamemind } = require('../controller/taskController');

/**
 * @swagger
 * /store/gamemind:
 *   post:
 *     summary: Armazena a pontuação do Gamemind
 *     description: Salva a pontuação do usuário no Gamemind no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pontuacao:
 *                 type: integer
 *                 description: Pontuação do usuário.
 *               user_id:
 *                 type: integer
 *                 description: ID do usuário associado à pontuação.
 *     responses:
 *       201:
 *         description: Pontuação armazenada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Erro ao salvar a pontuação.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 */

// Define uma rota POST para o endpoint /store/gamemind
router.post('/store/gamemind', storeGamemind);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;
