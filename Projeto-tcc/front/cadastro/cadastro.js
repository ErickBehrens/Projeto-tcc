// Obtém o elemento HTML com o id "handleSubmit" e atribui à variável "button"
let button = document.getElementById("handleSubmit");

// Define uma função que será executada quando o botão for clicado
button.onclick = async function (event) {
  // Previne o comportamento padrão do botão (enviar o formulário)
  event.preventDefault();

  // Obtém os valores dos campos de formulário com os ids "username", "email" e "password"
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Cria um objeto com os valores obtidos
  let data = { name, email, password };

  // Imprime os dados do formulário no console
  console.log("Dados do formulário:", data);

  // Tenta enviar os dados para o servidor
  try {
    // Faz uma requisição POST para o servidor em http://localhost:3001/api/user/create
    const response = await fetch('http://localhost:3001/api/user/create', {
      // Define o método da requisição como POST
      method: "POST",
      // Define o cabeçalho da requisição com o tipo de conteúdo como JSON
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      // Converte o objeto de dados para uma string JSON e envia como corpo da requisição
      body: JSON.stringify(data)
    });

    // Obtém a resposta do servidor em formato JSON
    const content = await response.json();

    // Imprime a resposta do servidor no console
    console.log("Resposta do servidor:", content);

    // Verifica se a resposta do servidor foi bem-sucedida
    if (content.success) {
      // Exibe uma mensagem de sucesso e redireciona para a página de login
      alert("Sucesso");
      window.location.href = "../front/login/login.html";
    } else {
      // Exibe uma mensagem de erro com a mensagem do servidor
      alert("Erro ao enviar os dados: " + content.message);
    }
  } catch (error) {
    // Imprime o erro no console
    console.error("Erro ao processar a resposta do servidor:", error);
    // Exibe uma mensagem de erro genérica
    alert("Erro ao processar a resposta");
  }
};