const express = require("express");
const router = express.Router();

// Lista de estados
const estados = [];

// Rota para obter a lista de estados em JSON
router.get("/estados", (req, res) => {
  // Renderize o formulário em vez de enviar um JSON vazio
  res.render("form");
});

// Rota para renderizar o formulário
router.get("/estados/form", (req, res) => {
  res.render("form");
});

// Rota para cadastrar um novo estado
router.post('/estados/cadastrar', (req, res) => {
  const nome = req.body.nome;

  // Verifique se o nome não está vazio antes de adicionar
  if (nome) {
    estados.push(nome);
    res.json({ message: "Estado cadastrado com sucesso", estado: nome });
  } else {
    res.status(400).json({ error: "Nome do estado não pode estar vazio" });
  }
});

module.exports = router;
