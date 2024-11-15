document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage
    const nameSpan = document.getElementById("name");
    const emailSpan = document.getElementById("email");

    // Carregar informações do perfil do usuário ao abrir a página
    async function loadProfile() {
        if (!userId) {
            console.error("ID do usuário não encontrado.");
            return; // Ou redirecione para a página de login
        }

        try {
            const response = await fetch(`/api/users/${userId}`);
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.status} ${response.statusText}`);
            }
            const userData = await response.json();
            nameSpan.textContent = userData.name || ''; // Preenche o campo com o nome
            emailSpan.textContent = userData.email || ''; // Preenche o campo com o email
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    // Chama a função para carregar o perfil
    loadProfile(); // Carrega as informações do usuário ao iniciar
});