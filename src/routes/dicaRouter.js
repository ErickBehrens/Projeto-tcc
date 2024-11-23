// Importa o módulo Router do Express.js
const { Router } = require('express');

// Importa as funções do controlador
const { postDica, getDicas } = require('../controller/dicaController');

// Cria uma instância do router do Express.js
const router = Router();

/**
 * @swagger
 * /dica/post:
 *   post:
 *     summary: Posta uma nova dica
 *     description: Recebe uma dica e armazena no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título da dica.
 *               descricao:
 *                 type: string
 *                 description: Descrição da dica.
 *     responses:
 *       201:
 *         description: Dica postada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Erro ao postar a dica.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

// Define a rota POST para o endpoint /dica/post
router.post('/post', postDica);

/**
 * @swagger
 * /dica/all:
 *   get:
 *     summary: Obtém todas as dicas
 *     description: Retorna uma lista de todas as dicas armazenadas no banco de dados.
 *     responses:
 *       200:
 *         description: Dicas obtidas com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       titulo:
 *                         type: string
 *                       descricao:
 *                         type: string
 *       400:
 *         description: Erro ao obter as dicas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

// Define a rota GET para o endpoint /dica/all
router.get('/dica', getDicas);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;