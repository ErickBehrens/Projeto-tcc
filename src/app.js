const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const dicaRouter = require('./routes/dicaRouter'); // Importa o router de dicas

const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());

// Define as rotas para as APIs
app.use('/api', taskRouter);
app.use('/api', userRouter);
app.use('/api', loginRouter);
app.use('/api/', dicaRouter); // Usa o router de dicas


module.exports = app;