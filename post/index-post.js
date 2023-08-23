const express = require("express");
const bodyParser = require("body-parser");

const post = require("./components/post/network");
const config = require("../config.js");
const errors = require("../network/errors");

const app = express();

app.use(bodyParser.json());


// RUTAS
app.use("/api/post", post);


app.use(errors);

app.listen(config.post.port, () => {
  console.log("Servicio posts escuchando en el puerto ", config.post.port);
});
