// Importa o módulo Express.js
const express = require('express');

// Cria uma instância do router do Express.js
const router = express.Router();

// Importa a função login do arquivo loginController.js
const { login } = require("../controller/loginController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login do usuário
 *     description: Valida as credenciais do usuário e retorna um token de autenticação.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário.
 *                 example: usuario@exemplo.com
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 token:
 *                   type: string
 *                   description: Token de autenticação.
 *       400:
 *         description: Erro de validação ou credenciais inválidas.
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

// Define uma rota POST para o endpoint /login
router.post('/login', login);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;
