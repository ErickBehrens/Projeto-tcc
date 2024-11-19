// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Função assíncrona para armazenar pontos no banco de dados
async function storeGamemind(request, response) {

  const params = [
    request.body.pontuacao,
    request.body.user_id
  ];

  // Query SQL para inserir um novo registro na tabela pontos com o valor de pontos informado
  const query = "INSERT INTO pontos(pontuacao,user_id) VALUES(?,?)";

  // Executa a query SQL com o valor de pontos informado
  connection.query(query, params, (err, results) => {
    if (results) {
        response.status(201).json({
            success: true,
            message: "Sucesso",
            params: params,
            data: results
        })
    } else {
        response.status(400).json({
            success: false,
            message: "Ops, deu problema",
            data: err
        })
    }
  })
}

// Exporta a função storeGamemind para que possa ser utilizada em outros módulos
module.exports = {
  storeGamemind
};