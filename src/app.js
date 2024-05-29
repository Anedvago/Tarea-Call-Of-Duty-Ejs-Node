import express from "express";
import { router } from "./routes/index.routes.js";
import { routerUsuarios } from "./routes/usuarios.routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { routerJuegos } from "./routes/juegos.routes.js";
import { routerPersonajes } from "./routes/personajes.routes.js";
import { routerDificultades } from "./routes/dificultades.routes.js";
import { routerPerfiles } from "./routes/perfiles.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */
app.use(bodyParser.urlencoded({ extended: false }));
// Configurar el motor de vistas EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(__dirname + "/public"));

// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/Call_of_duty", {})
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Configurar el enrutador
app.use("/", router);
app.use(routerUsuarios);
app.use(routerJuegos);
app.use(routerPersonajes);
app.use(routerDificultades);
app.use(routerPerfiles);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
