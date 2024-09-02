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
    // Verifica o nível de dependência baseado no valor de "pontos"
    if (pontos < 10) {
      resultadoTexto.textContent = `Seu nível de dependencia é baixo. Continue se divertindo de forma equilibrada!`;
    } else if (pontos < 20) {
      resultadoTexto.textContent = `Seu nível de dependencia é moderado. Tente equilibrar mais o seu tempo de jogo.`;
    } else {
      resultadoTexto.textContent = `Seu nível de dependencia é alto. Considere reduzir o tempo de jogo e buscar atividades alternativas.`;
    }
  } else {
    // Exibe um texto de erro se o valor de "pontos" não foi encontrado
    resultadoTexto.textContent = `Pontuação não encontrada.`;
  }
});