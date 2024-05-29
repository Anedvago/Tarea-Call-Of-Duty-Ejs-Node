import mongoose from "mongoose";

const personajeSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
    },
    Lugar: {
      type: String,
    },
    Juego_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "juegos",
    },
    Campaña: {
      type: String,
    },
  },
  { versionKey: false }
);

const personaje = mongoose.model("personajes", personajeSchema);

module.exports = personaje;
