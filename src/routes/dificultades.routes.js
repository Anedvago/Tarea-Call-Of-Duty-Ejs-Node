import express from "express";
import {
  actualizarDificultad,
  borrarDificultad,
  crearDificultad,
  renderizarPagina,
  seleccionarDificultad,
} from "../controllers/dificultades.controller.js";

const routerDificultades = express.Router();

routerDificultades.get("/dificultades", renderizarPagina);
routerDificultades.post("/dificultades/crear", crearDificultad);
routerDificultades.post("/dificultades/borrar/:id", borrarDificultad);
routerDificultades.get(
  "/dificultades/actualizar/:index",
  seleccionarDificultad
);
routerDificultades.post("/dificultades/actualizar/:id", actualizarDificultad);

export { routerDificultades };
