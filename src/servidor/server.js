const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o parsing do JSON no corpo das requisições
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
