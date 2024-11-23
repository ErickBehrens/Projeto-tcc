document.addEventListener('DOMContentLoaded', async () => {
    const dicaForm = document.getElementById('dicaForm');
    const feedDicas = document.getElementById('feedDicas');

    // Função para buscar dicas do servidor
    async function fetchDicas() {
        try {
            const response = await fetch('http://localhost:3001/api/dica');
            
            // Verifica se a resposta não foi bem-sucedida
            if (!response.ok) {
                const errorText = await response.text(); // Captura o texto da resposta
                throw new Error(`Erro: ${response.status} - ${errorText}`);
            }
    
            const content = await response.json();
    
            if (content.success) {
                // Limpa o feed antes de adicionar as dicas
                feedDicas.innerHTML = '';
                content.data.forEach(dica => {
                    const dicaElement = document.createElement('div');
                    dicaElement.classList.add('dica');
                    dicaElement.innerHTML = `<h3>${dica.titulo}</h3><p>${dica.descricao}</p>`;
                    feedDicas.appendChild(dicaElement);
                });
            } else {
                feedDicas.innerHTML = '<p>Erro ao carregar as dicas.</p>';
            }
        } catch (error) {
            console.error('Erro ao buscar dicas:', error);
            alert('Erro ao buscar dicas. Verifique o console para mais detalhes.');
        }
    }

    // Chama a função para buscar as dicas ao carregar a página
    fetchDicas();

    // Evento para enviar a dica
    dicaForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;

        const response = await fetch('http://localhost:3001/api/dica/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo, descricao })
        });

        const content = await response.json();

        if (content.success) {
            // Limpa os campos do formulário
            dicaForm.reset();
            // Atualiza o feed
            fetchDicas();
        } else {
            alert(content.message);
        }
    });
});