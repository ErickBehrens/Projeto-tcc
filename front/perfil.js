document.addEventListener("DOMContentLoaded", () => {
    const userId = "ID_DO_USUARIO";  // Substitua por uma forma de obter o ID do usuário logado
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const scoreInput = document.getElementById("score");
    const saveButton = document.getElementById("save-btn");

    // Carregar informações do perfil do usuário ao abrir a página
    async function loadProfile() {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (response.ok) {
                const userData = await response.json();
                nameInput.value = userData.name || ''; // Preenche o campo com o nome
                emailInput.value = userData.email || ''; // Preenche o campo com o email
                scoreInput.value = userData.score || 0; // Preenche o campo com a pontuação
            } else {
                console.error("Erro ao carregar dados do perfil");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    // Salvar alterações no perfil do usuário
    saveButton.addEventListener("click", async () => {
        const updatedData = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            });
            if (response.ok) {
                alert("Perfil atualizado com sucesso!");
                loadProfile(); // Atualiza os campos
            } else {
                alert("Erro ao salvar alterações.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    });

    loadProfile(); // Carrega as informações do usuário ao iniciar
});