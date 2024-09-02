// Seleciona o elemento com o id "handleSubmit" e armazena em uma variável
let enviar = document.getElementById('handleSubmit');

// Adiciona um evento de click ao elemento selecionado
enviar.onclick = async function(event) {
  // Previne o comportamento padrão do formulário (enviar o formulário para o servidor)
  event.preventDefault();

  // Seleciona o formulário com o id "quizForm" e armazena em uma variável
  const form = document.getElementById('quizForm');

  // Cria um objeto FormData a partir do formulário selecionado
  const formData = new FormData(form);

  // Inicializa uma variável para armazenar a pontuação
  let pontos = 0;

  // Itera sobre os campos do formulário e soma os valores
  formData.forEach((value, key) => {
    pontos += parseInt(value);
  });

  // Cria um objeto com a propriedade "pontos" e o valor da pontuação
  const data = {
    pontos
  };

  // Faz uma requisição POST para o servidor com os dados do formulário
  await fetch('http://localhost:3001/api/store/gamemind', {
    method: 'POST',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  });

  // Redireciona o usuário para a página "resultado.html" com a pontuação como parâmetro
  window.location.href = `resultado.html?pontos=${pontos}`;
};