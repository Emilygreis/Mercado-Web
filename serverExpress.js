const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const productos = [
  "banana",
  "cebollas",
  "lechuga",
  "papas",
  "pimenton",
  "tomate",
];

app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes/",
    helpers: {
      mensajeBienvenida: () => "Bienvenido al mercardo WEB, seleccione sus productos"
    }
  })
);

app.set("view engine", "handlebars");

app.use(express.static("assets"));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/fontawesome', express.static(__dirname + '/node_modules/font-awesome'));

app.get('/', (req, res) => {
  res.render("Inicio", {
    layout: "Inicio",
    dashboard: "Dashboard from config",
    productos: productos,
  });
});
