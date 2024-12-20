// Importa o módulo Router do Express.js
const { Router } = require('express');

// Cria uma instância do router do Express.js
const router = Router();

// Importa a função storeUser do arquivo userController.js
const {getUserProfile, storeUser, editUser} = require("../controller/userController");

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Cadastra um novo usuário
 *     description: Cria um novo usuário no sistema com nome, email e senha.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 description: Email do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso.
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
 *         description: Erro ao cadastrar usuário.
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

// Define uma rota POST para o endpoint /user/create
router.post('/user/create', storeUser);

// Rota para buscar perfil do usuário
router.get("/getUserProfile/:id", getUserProfile);

router.put("/editUser", editUser);

module.exports = router;