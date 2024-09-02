// Importa o módulo mysql2 para conexão com o banco de dados MySQL
const mysql = require('mysql2');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL utilizando as variáveis de ambiente
const connection = mysql.createConnection({
  // Host do banco de dados
  host: process.env.DB_HOST,
  // Usuário do banco de dados
  user: process.env.DB_USER,
  // Senha do banco de dados
  password: process.env.DB_PASSWORD,
  // Nome do banco de dados
  database: process.env.DB_DATABASE
});

// Estabelece a conexão com o banco de dados
connection.connect(function(err) {
  // Verifica se houve um erro durante a conexão
  if (err) {
    // Lança um erro se houver um problema durante a conexão
    throw err;
  } else {
    // Exibe uma mensagem de sucesso se a conexão for estabelecida com sucesso
    console.log("MySql conectado!");
  }
});

// Exporta a conexão com o banco de dados para que possa ser utilizada em outros módulos
module.exports = connection;