import express from "express";
import {
  actualizarJuego,
  borrarJuego,
  crearJuego,
  renderizarPagina,
  seleccionarJuego,
} from "../controllers/juegos.controller.js";

const routerJuegos = express.Router();

routerJuegos.get("/juegos", renderizarPagina);
routerJuegos.post("/juegos/crear", crearJuego);
routerJuegos.post("/juegos/borrar/:id", borrarJuego);
routerJuegos.get("/juegos/actualizar/:index", seleccionarJuego);
routerJuegos.post("/juegos/actualizar/:id", actualizarJuego);

export { routerJuegos };
