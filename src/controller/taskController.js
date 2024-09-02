// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Função assíncrona para armazenar pontos no banco de dados
async function storeGamemind(request, response) {
  // Exibe no console o valor de pontos recebido no corpo da requisição
  console.log('1 ' + request.body.pontos);

  // Cria um array com o valor de pontos recebido no corpo da requisição
  const params = Array(
    request.body.pontos
  );

  // Exibe no console o array de parâmetros
  console.log('2 ' + params);

  // Query SQL para inserir um novo registro na tabela pontos com o valor de pontos informado
  const query = "INSERT INTO pontos(pontuacao) VALUES(?)";

  // Executa a query SQL com o valor de pontos informado
  connection.query(query, request.body.pontos, (err, results) => {
    // Exibe no console o erro e os resultados da execução da query
    console.log(err, results);

    // Verifica se houve resultados
    if (results) {
      // Retorna uma resposta HTTP 201 com um objeto JSON contendo informações de sucesso
      response
        .status(201)
        .json({
          success: true, // Indica que a operação foi realizada com sucesso
          message: "Sucesso!", // Mensagem de sucesso
          data: results // Dados do registro inserido
        })
    } else {
      // Retorna uma resposta HTTP 400 com um objeto JSON contendo informações de erro
      response
        .status(400)
        .json({
          success: false, // Indica que a operação não foi realizada com sucesso
          message: "Ops, deu problema!", // Mensagem de erro
          data: err // Erro ocorrido durante a execução da query
        })
    }
  })
}

// Exporta a função storeGamemind para que possa ser utilizada em outros módulos
module.exports = {
  storeGamemind
};