const connection = require('../config/db');

// Função para postar uma nova dica
async function postDica(req, res) {
    const { titulo, descricao } = req.body; // Obtém os dados do corpo da requisição

    // Verifica se os campos estão presentes
    if (!titulo || !descricao) {
        return res.status(400).json({
            success: false,
            message: "Título e descrição são obrigatórios."
        });
    }

    const query = "INSERT INTO dicas (titulo, descricao) VALUES (?, ?)";
    const params = [titulo, descricao];

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao inserir a dica",
                error: err
            });
        }

        return res.status(201).json({
            success: true,
            message: "Dica postada com sucesso!",
            data: results
        });
    });
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