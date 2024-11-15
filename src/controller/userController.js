const connection = require('../config/db');

async function storeUser (request, response) {
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

async function getUserProfile(request, response) {
    const userId = request.params.id; // Obtém o ID do usuário da URL
    const query = "SELECT name, email FROM users WHERE id = ?"; // Ajuste a query conforme necessário

    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error("Erro ao buscar perfil do usuário:", err);
            return response.status(400).json({
                success: false,
                message: "Erro ao buscar perfil do usuário"
            });
        }
        if (results.length > 0) {
            return response.status(200).json(results[0]); // Retorna os dados do usuário
        } else {
            return response.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }
    });
}

module.exports = {
    storeUser ,
    getUserProfile
};