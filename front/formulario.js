let currentQuestion = 1;
const enviar = document.getElementById('enviar')

function nextQuestion(questionNumber) {
    const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    // Esconder a pergunta atual
    document.getElementById(`question${questionNumber}`).classList.remove('active');

    // Mostrar a próxima pergunta
    currentQuestion++;
    const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
    if (nextQuestionElement) {
        nextQuestionElement.classList.add('active');
    } else {
        alert('Você completou o questionário!');
    }
}

enviar.addEventListener('click', async function enviarForms(event){
    event.preventDefault()
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let user_id = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage
    let pontuacao = 0;

    formData.forEach((value) => {
        pontuacao += parseInt(value);
    });

    const data = { pontuacao,user_id };

    const response = await fetch('http://localhost:3001/api/store/gamemind', {
        method: 'POST',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json()
    
    console.log(content)
    console.log(data)
    
    if(content.success) {
        window.location.href = `resultado.html?pontos=${pontuacao}`;
        console.log('deu bom')
    } else {
        console.log('deu ruim')
    }
}) 

// Inicializa a primeira pergunta
document.getElementById(`question${currentQuestion}`).classList.add('active');