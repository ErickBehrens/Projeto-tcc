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

// Função para editar o perfil de um usuário
async function updateUser(request, response) {
  const userId = request.params.id;
  const { name, email, password } = request.body;

  // Query SQL para atualizar os dados do usuário
  const query = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

  connection.query(query, [name, email, password, userId], (err, results) => {
    if (err) {
      console.error("Erro ao atualizar o usuário no banco de dados:", err);
      return response.status(400).json({
        success: false,
        message: "Erro ao atualizar os dados no banco de dados",
        error: err
      });
    }

    if (results.affectedRows === 0) {
      return response.status(404).json({
        success: false,
        message: "Usuário não encontrado"
      });
    }

    return response.status(200).json({
      success: true,
      message: "Perfil atualizado com sucesso",
      data: results
    });
  });
}

// Função para salvar a pontuação do usuário
async function saveScore(request, response) {
  const { userId, pontuacao } = request.body;

  // Query SQL para inserir a pontuação do usuário
  const query = "INSERT INTO pontos(user_id, pontuacao) VALUES(?,?)";

  connection.query(query, [userId, pontuacao], (err, results) => {
    if (err) {
      console.error("Erro ao salvar a pontuação no banco de dados:", err);
      return response.status(400).json({
        success: false,
        message: "Erro ao salvar a pontuação no banco de dados",
        error: err
      });
    }

    return response.status(200).json({
      success: true,
      message: "Pontuação salva com sucesso",
      data: results
    });
  });
}

// Exporta as funções para que possam ser utilizadas em outros módulos
module.exports = {
  storeUser,
  updateUser,
  saveScore
};
