// Adiciona um evento de carregamento de página ao documento
document.addEventListener('DOMContentLoaded', () => {
  // Cria um objeto URLSearchParams a partir da string de consulta da URL atual
  const urlParams = new URLSearchParams(window.location.search);

  // Extrai o valor do parâmetro "pontos" da URL e armazena em uma variável
  const pontos = urlParams.get('pontos');

  // Seleciona o elemento com o id "resultadoTexto" e armazena em uma variável
  const resultadoTexto = document.getElementById('resultadoTexto');

  // Verifica se o valor de "pontos" foi encontrado
  if (pontos) {
    // Converte o valor de "pontos" para um número
    const pontosTotais = parseInt(pontos);

    // Verifica o nível de dependência baseado no valor de "pontos"
    let mensagem;
    if (pontosTotais < 10) {
      mensagem = `Seu nível de dependência é baixo. Continue se divertindo de forma equilibrada!`;
    } else if (pontosTotais < 20) {
      mensagem = `Seu nível de dependência é moderado. Tente equilibrar mais o seu tempo de jogo.`;
    } else {
      mensagem = `Seu nível de dependência é alto. Considere reduzir o tempo de jogo e buscar atividades alternativas.`;
    }

    // Exibe a mensagem junto com o total de pontos
    resultadoTexto.textContent = `Você acumulou um total de ${pontosTotais} pontos. ${mensagem}`;
  } else {
    // Exibe um texto de erro se o valor de "pontos" não foi encontrado
    resultadoTexto.textContent = `Pontuação não encontrada.`;
  }
});
