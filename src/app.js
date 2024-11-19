// Importa o módulo Express.js
const express = require('express');
// Importa o módulo cors para habilitar o CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Importa os routers de tarefas, usuários e login
const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');

// Cria uma instância do aplicativo Express.js
const app = express();

// Define a porta do servidor (3005 por padrão, mas pode ser alterada via variável de ambiente PORT)
app.set('port', process.env.PORT || 3005);

// Habilita o CORS para permitir requisições de diferentes origens
app.use(cors());

// Habilita o parsing de JSON para as requisições
app.use(express.json());

// Define as rotas para as APIs de tarefas, usuários e login
app.use('/api', taskRouter);
app.use('/api', userRouter);
app.use('/api', loginRouter);

// Exporta o aplicativo Express.js para ser utilizado em outros módulos
module.exports = app;