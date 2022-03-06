const express = require("express");
const bodyParser = require("body-parser");
const UserApi = require("./Routes/user.routes");
const PokemonApi = require("./Routes/pokemon.routes");

const app = express();
const port = 8100;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//oute back des requetes appartenant a user
app.use("/api/user", UserApi);
//route back des requetes appartenant aux pokemon
app.use("/api/pokemon", PokemonApi);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});