import express from "express";
import {
  actualizarPersonaje,
  borrarPersonaje,
  crearPersonaje,
  renderizarPagina,
  seleccionarPersonaje,
} from "../controllers/personajes.controller.js";

const routerPersonajes = express.Router();

routerPersonajes.get("/personajes", renderizarPagina);
routerPersonajes.post("/personajes/crear", crearPersonaje);
routerPersonajes.post("/personajes/borrar/:id", borrarPersonaje);
routerPersonajes.get("/personajes/actualizar/:index", seleccionarPersonaje);
routerPersonajes.post("/personajes/actualizar/:id", actualizarPersonaje);

export { routerPersonajes };
