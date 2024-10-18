// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Função assíncrona para armazenar um usuário no banco de dados
async function storeUser(request, response) {
  const params = [request.body.name, request.body.email, request.body.password];

  const query = "INSERT INTO users(name, email, password) VALUES(?,?,?)";

  connection.query(query, params, (err, results) => {
    if (err) {
      console.error("Erro ao inserir no banco de dados:", err);
      return response.status(400).json({
        success: false,
        message: "Erro ao inserir os dados no banco de dados",
        error: err
      });
    }

    return response.status(200).json({
      success: true,
      message: "Usuário cadastrado com sucesso",
      data: results
    });
  });
}

// Exporta a função storeUser
module.exports = {
  storeUser
};
