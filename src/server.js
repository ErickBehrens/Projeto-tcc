const app = require('./app')

// Importa Swagger para documentação da API
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Define as opções do Swagger, com a documentação da API
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Tarefas", // Título da documentação
      version: "1.0.0", // Versão da API
      description: "API CRUD para gerenciar tarefas" // Descrição da API
    },
    servers: [
      {
        url: "http://localhost:3001" // URL do servidor para a API
      }
    ],
  },
  apis: [`${__dirname}/routes/*.js`], // Caminho para as rotas que serão documentadas
};

// Define a porta onde o servidor irá rodar (da variável de ambiente ou padrão 1903)
const port = process.env.PORT || 1903;

// Importa o router de tarefas
const taskRouter = require('./routes/taskRouter');

// Gera a documentação Swagger a partir das opções
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Define a rota para exibir a documentação da API (Swagger)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define as rotas para a API de tarefas
app.use('/api', taskRouter);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});