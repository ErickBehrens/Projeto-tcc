const connection = require('../config/db');

// Função para postar uma nova dica
async function postDica(request, response) {

    const params = Array(
        request.body.titulo, 
        request.body.descricao
    );

    const query = "INSERT INTO dicas (titulo, descricao) VALUES (?, ?)";

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

// Função para obter todas as dicas
async function getDicas(req, res) {
    const query = "SELECT * FROM dicas";
    
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: 'Erro ao buscar dicas.'
            });
        }
        return res.status(200).json({
            success: true,
            data: results
        });
    });
}
module.exports = {
    postDica,
    getDicas
};