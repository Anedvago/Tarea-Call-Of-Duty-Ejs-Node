import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    Nombre: { type: String },
    Email: { type: String },
    Contraseña: { type: String },
  },
  { versionKey: false }
);

const usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = usuario;
