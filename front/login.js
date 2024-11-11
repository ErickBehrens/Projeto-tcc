// Seleciona o elemento com o id "handleSubmit" e armazena em uma variável
let button = document.getElementById("handleSubmit");

// Adiciona um evento de click ao elemento selecionado
button.onclick = async function () {

  // Seleciona o valor do campo de entrada com o id "email" e armazena em uma variável
  let email = document.getElementById("email").value;

  // Seleciona o valor do campo de entrada com o id "password" e armazena em uma variável
  let password = document.getElementById("password").value;

  // Cria um objeto com as propriedades "email" e "password" e os valores correspondentes
  let data = { email, password };

  // Exibe os dados do formulário no console
  console.log("Dados do formulário:", data);

  // Faz uma requisição POST para o servidor com os dados do formulário
  const response = await fetch('http://localhost:3001/api/login', {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)
  });

  // Converte a resposta do servidor em um objeto JSON
  const content = await response.json();
  
  // Exibe o conteúdo da resposta do servidor no console
  console.log("Resposta do servidor:", content);

  // Verifica se o login foi realizado com sucesso
  if (content.success) {
    // Acessa os dados retornados pelo servidor
    let userData = content.data[0];  // O banco retorna um array, pegamos o primeiro item

    // O ID do usuário está dentro de userData
    let userId = userData.id;  // Acessando o ID do usuário

    console.log("ID do usuário:", userId);

    // Exibe uma mensagem de sucesso no console
    console.log("Login realizado com sucesso!");

    // Exemplo de redirecionamento para a página home
    window.location.href = "../front/home.html";
  } else {
    // Exibe uma mensagem de erro no console
    console.log("Erro ao realizar login!");
  }
};
