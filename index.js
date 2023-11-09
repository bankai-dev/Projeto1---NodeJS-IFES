const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const porta = 3000;

// Configuração do Express para o uso do Handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

const route = require("./routes/route");

app.use("/", route);

app.listen(porta, () => {
  console.log("Exemplo de uso de rotas");
});
