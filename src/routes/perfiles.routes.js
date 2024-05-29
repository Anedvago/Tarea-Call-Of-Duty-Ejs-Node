import express from "express";
import {
  actualizarPerfil,
  borrarPerfil,
  crearPerfil,
  renderizarPagina,
  seleccionarPerfil,
} from "../controllers/perfiles.controller.js";

const routerPerfiles = express.Router();

routerPerfiles.get("/perfiles", renderizarPagina);
routerPerfiles.post("/perfiles/crear", crearPerfil);
routerPerfiles.post("/perfiles/borrar/:id", borrarPerfil);
routerPerfiles.get("/perfiles/actualizar/:index", seleccionarPerfil);
routerPerfiles.post("/perfiles/actualizar/:id", actualizarPerfil);

export { routerPerfiles };
