import express from "express";
import {
  actualizarUsuario,
  borrarUsuario,
  crearUsuario,
  renderizarPagina,
  seleccionarUsuario,
} from "../controllers/usuarios.controller.js";

const routerUsuarios = express.Router();

routerUsuarios.get("/usuarios", renderizarPagina);
routerUsuarios.post("/usuarios/crear", crearUsuario);
routerUsuarios.post("/usuarios/borrar/:id", borrarUsuario);
routerUsuarios.get("/usuarios/actualizar/:index", seleccionarUsuario);
routerUsuarios.post("/usuarios/actualizar/:id", actualizarUsuario);

export { routerUsuarios };
