import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema(
  {
    Nombre: { type: String },
    Desarrollador: { type: String },
    Fecha_Lanzamiento: { type: String },
    Plataformas: { type: [String] },
    Generos: { type: [String] },
    Clasificacion: { type: String },
  },
  { versionKey: false }
);

const juego = mongoose.model("juegos", juegoSchema);

module.exports = juego;
