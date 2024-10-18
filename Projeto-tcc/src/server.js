// Importa o módulo 'app' do arquivo 'app.js'
const app = require('./app');

// Obtém o valor da porta do aplicativo Express.js
const port = app.get('port');

// Inicia o servidor Express.js e faz com que ele escute requisições na porta especificada
app.listen(port, () => 
  // Imprime uma mensagem no console indicando que o servidor está rodando na porta especificada
  console.log(`Run on port ${port}!`)
);