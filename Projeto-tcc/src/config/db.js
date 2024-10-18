// Importa o módulo mysql2 para conexão com o banco de dados MySQL
const mysql = require('mysql2');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL utilizando as variáveis de ambiente
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Host do banco de dados
  user: process.env.DB_USER,      // Usuário do banco de dados
  password: process.env.DB_PASSWORD,  // Senha do banco de dados
  database: process.env.DB_DATABASE  // Nome do banco de dados
});

// Estabelece a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    throw err;  // Exibe um erro caso a conexão falhe
  } else {
    console.log("Conexão com o banco de dados MySQL estabelecida!");
  }
});

// Exporta a conexão com o banco de dados para ser usada em outros módulos
module.exports = connection;
