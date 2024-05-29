import mongoose from "mongoose";

const perfilSchema = new mongoose.Schema(
  {
    Nombre: { type: String },
    Usuario_Id: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" },
    Juego_Id: { type: mongoose.Schema.Types.ObjectId, ref: "juegos" },
    Dificultad_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dificultades",
    },
  },
  { versionKey: false }
);

const perfil = mongoose.model("perfiles", perfilSchema);

module.exports = perfil;
