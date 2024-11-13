let currentQuestion = 1;

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

async function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let pontos = 0;

    formData.forEach((value) => {
        pontos += parseInt(value);
    });

    const data = { pontos };

    await fetch('http://localhost:3001/api/store/gamemind', {
        method: 'POST',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    window.location.href = `resultado.html?pontos=${pontos}`;
}

// Inicializa a primeira pergunta
document.getElementById(`question${currentQuestion}`).classList.add('active');