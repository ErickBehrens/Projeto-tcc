// Função para carregar os dados do usuário no perfil
function loadProfile() {
    // Exemplo de dados do usuário, normalmente você obteria isso de um banco de dados
    const user = {
        name: "João da Silva",
        email: "joao@example.com",
        password: "senha123",
        score: 85 // Exemplo de pontuação
    };

    // Preenche os campos com os dados do usuário
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('password').value = user.password;
    document.getElementById('score').value = user.score;
}

// Função para salvar as alterações do perfil
function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode fazer uma requisição para o backend para salvar os dados
    console.log("Dados salvos:", { name, email, password });

    // Exibir mensagem de sucesso
    alert("Perfil atualizado com sucesso!");
}

// Evento ao carregar a página
window.onload = () => {
    loadProfile(); // Carrega os dados do perfil ao abrir a página
    document.getElementById('save-btn').onclick = saveProfile; // Configura o evento de clique no botão
};
