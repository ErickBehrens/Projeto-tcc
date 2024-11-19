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
    const params = request.params.id; // Obtém o ID do usuário da URL

    const query = "SELECT * FROM users WHERE id = ?"; // Ajuste a query conforme necessário

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

async function editUser(request, response) {
    const params = [
        request.body.name,
        request.body.email,
        request.body.password,
        request.body.id
    ]

    const query = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?"; // Ajuste a query conforme necessário

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

module.exports = {
    storeUser ,
    getUserProfile,
    editUser
};