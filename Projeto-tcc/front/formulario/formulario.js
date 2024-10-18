// Seleciona o formulário com o id "quizForm" e armazena em uma variável
const form = document.getElementById('quizForm');

// Seleciona todas as perguntas do formulário e armazena em uma variável
const questions = form.querySelectorAll('.question');

// Oculta todas as perguntas, exceto a primeira
questions.forEach((question, index) => {
  if (index > 0) {
    question.style.display = 'none';
  }
});

// Armazena as respostas em um array
let answers = [];

// Adiciona um evento de click ao elemento com o id "handleSubmit"
let enviar = document.getElementById('handleSubmit');
enviar.onclick = async function(event) {
  event.preventDefault();

  // Seleciona a pergunta atual e a próxima pergunta
  const currentQuestion = questions[answers.length];
  const nextQuestion = questions[answers.length + 1];

  // Verifica se o usuário respondeu à pergunta atual
  const answer = currentQuestion.querySelector('input:checked');
  if (answer) {
    // Armazena a resposta
    answers.push(parseInt(answer.value));

    // Oculta a pergunta atual
    currentQuestion.style.display = 'none';

    // Verifica se há uma próxima pergunta antes de exibi-la
    if (nextQuestion !== undefined) {
      nextQuestion.style.display = 'block';
    } else {
      // Se não houver próxima pergunta, envia os dados ao servidor
      const data = {
        pontos: answers.reduce((acc, current) => acc + current, 0)
      };

      await fetch('http://localhost:3001/api/store/gamemind', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
      });

      // Redireciona para a página de resultado com a pontuação
      window.location.href = `resultado.html?pontos=${data.pontos}`;
    }
  } else {
    alert('Por favor, responda à pergunta atual!');
  }
};
