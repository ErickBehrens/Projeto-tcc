// Função para editar o perfil
document.getElementById('editProfileForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3001/api/user/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert('Perfil atualizado com sucesso!');
        } else {
            alert('Erro ao atualizar perfil.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão.');
    }
});

// Função para salvar a pontuação
document.getElementById('saveScore').addEventListener('click', async function() {
    const score = 25; // Aqui você pode obter a pontuação calculada do quiz
    const data = { pontos: score };

    try {
        const response = await fetch('http://localhost:3001/api/pontos/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Pontuação salva com sucesso!');
        } else {
            alert('Erro ao salvar pontuação.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão.');
    }
});
