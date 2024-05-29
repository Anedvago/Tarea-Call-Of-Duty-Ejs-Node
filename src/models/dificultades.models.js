import mongoose from "mongoose";

const dificultadSchema = new mongoose.Schema(
  {
    Dificultad: { type: String },
  },
  { versionKey: false }
);

const dificultad = mongoose.model("dificultades", dificultadSchema);

module.exports = dificultad;
