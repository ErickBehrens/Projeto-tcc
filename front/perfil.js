const nameSpan = document.getElementById("name");
const emailSpan = document.getElementById("email");
const password = document.getElementById("password");
const button_salvar = document.getElementById('button_salvar')

document.addEventListener("DOMContentLoaded", async function getInfoUser(event) {
    event.preventDefault()

    let id = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage

    let response = await fetch(`http://localhost:3001/api/getUserProfile/${id}`, {
        method: 'GET',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        // body: JSON.stringify(data)
    })

    let content = await response.json()

    console.log(content)

    if(content.success) {
        nome_mostrar = content.data[0].name
        email_mostrar = content.data[0].email
        password_mostrar = content.data[0].password

        nameSpan.value = nome_mostrar
        emailSpan.value = email_mostrar
        password.value = password_mostrar
    } else {
        console.log('deu merda');
    }
})

button_salvar.addEventListener('click', async function editUser(event) {
    event.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let id = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage

    let data = {name, email, password, id}

    const response = await fetch('http://localhost:3001/api/editUser', {
        method: 'PUT',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    })

    let content = await response.json()

    console.log(content)

    if (content.success) {
        console.log('deu certo')
    } else {
        console.log('deu merda')
    }
})