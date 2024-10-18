// Importa a conexão com o banco de dados MySQL do arquivo db.js
const connection = require('../config/db');

// Função assíncrona para realizar o login
async function login(request, response) {
  // Cria um array com os parâmetros de entrada (email e senha)
  const params = Array(
    request.body.email, // Email do usuário
    request.body.password // Senha do usuário
  );

  // Query SQL para selecionar o nome, senha, id e data de criação do usuário com o email e senha informados
  const query = "SELECT name, password, id, created_at FROM users WHERE email = ? and password = ?";

  // Executa a query SQL com os parâmetros informados
  connection.query(query, params, (err, results) => {
    // Verifica se houve resultados e se não houve erros
    if (results.length > 0 && results) {
      // Retorna uma resposta HTTP 200 com um objeto JSON contendo informações de sucesso
      response
        .status(200)
        .json({
          success: true, // Indica que o login foi realizado com sucesso
          message: "Login realizado", // Mensagem de sucesso
          data: results // Dados do usuário logado
        })
    } else {
      // Retorna uma resposta HTTP 400 com um objeto JSON contendo informações de erro
      response
        .status(400)
        .json({
          success: false, // Indica que o login não foi realizado com sucesso
          message: "Sem sucesso", // Mensagem de erro
          data: err // Erro ocorrido durante a execução da query
        })
    }
  })
}

// Exporta a função login para que possa ser utilizada em outros módulos
module.exports = {
  login
};