// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Função existente para armazenar um usuário no banco de dados
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

// Nova função para buscar o perfil do usuário pelo ID
async function getUserProfile(request, response) {
  const userId = request.params.id;
  const query = "SELECT name, email, score FROM users WHERE id = ?";

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Erro ao buscar perfil do usuário:", err);
      return response.status(400).json({
        success: false,
        message: "Erro ao buscar perfil do usuário"
      });
    }
    if (results.length > 0) {
      return response.status(200).json(results[0]);
    } else {
      return response.status(404).json({
        success: false,
        message: "Usuário não encontrado"
      });
    }
  });
}

// Nova função para atualizar o perfil do usuário
async function updateUserProfile(request, response) {
  const userId = request.params.id;
  const { name, email, password } = request.body;
  const query = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

  connection.query(query, [name, email, password, userId], (err, results) => {
    if (err) {
      console.error("Erro ao atualizar perfil do usuário:", err);
      return response.status(400).json({
        success: false,
        message: "Erro ao atualizar perfil do usuário"
      });
    }
    return response.status(200).json({
      success: true,
      message: "Perfil atualizado com sucesso"
    });
  });
}

module.exports = {
  storeUser,
  getUserProfile,
  updateUserProfile
};