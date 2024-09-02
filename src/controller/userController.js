// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Função assíncrona para armazenar um usuário no banco de dados
async function storeUser(request, response) {
  // Cria um array com os parâmetros de entrada (nome, email e senha)
  const params = [
    request.body.name, // Nome do usuário
    request.body.email, // Email do usuário
    request.body.password // Senha do usuário
  ];

  // Query SQL para inserir um novo registro na tabela users com os valores de nome, email e senha informados
  const query = "INSERT INTO users(name, email, password) VALUES(?,?,?)";

  // Executa a query SQL com os parâmetros informados
  connection.query(query, params, (err, results) => {
    // Verifica se houve erro durante a execução da query
    if (err) {
      // Exibe no console o erro ocorrido
      console.error("Erro ao inserir no banco de dados:", err);
      // Retorna uma resposta HTTP 400 com um objeto JSON contendo informações de erro
      return response.status(400).json({
        success: false, // Indica que a operação não foi realizada com sucesso
        message: "Erro ao inserir os dados no banco de dados", // Mensagem de erro
        error: err // Erro ocorrido durante a execução da query
      });
    }

    // Retorna uma resposta HTTP 200 com um objeto JSON contendo informações de sucesso
    return response.status(200).json({
      success: true, // Indica que a operação foi realizada com sucesso
      message: "Usuário cadastrado com sucesso", // Mensagem de sucesso
      data: results // Dados do registro inserido
    });
  });
}

// Exporta a função storeUser para que possa ser utilizada em outros módulos
module.exports = {
  storeUser
};