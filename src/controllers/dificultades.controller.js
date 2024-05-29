import dificultad from "../models/dificultades.models";

export const renderizarPagina = async (req, res) => {
  const dificultades = await obetenerTodos();
  res.render("dificultades", { dificultades: dificultades });
};
async function obetenerTodos() {
  try {
    const dificultades = await dificultad.find({});
    return dificultades;
  } catch (err) {
    console.error("Error al listar dificultads:", err);
  }
}
export const crearDificultad = async (req, res) => {
  const { difficulty } = req.body;
  const nuevaDificultad = new dificultad({
    Dificultad: difficulty,
  });
  nuevaDificultad
    .save()
    .then(() => {
      res.redirect("../dificultades");
    })
    .catch((error) => {
      console.error("Error al guardar dificultad:", error);
    });
};
export const borrarDificultad = async (req, res) => {
  try {
    await dificultad.findByIdAndDelete(req.params.id);
    res.redirect("../../dificultades");
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};

export const seleccionarDificultad = async (req, res) => {
  try {
    const dificultades = await obetenerTodos();
    res.render("dificultad", {
      dificultades: dificultades,
      dificultad: dificultades[req.params.index],
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
export const actualizarDificultad = async (req, res) => {
  const { difficulty } = req.body;
  const id = req.params.id;
  try {
    dificultad
      .findByIdAndUpdate(id, {
        Dificultad: difficulty,
      })
      .then(() => {
        res.redirect("../../dificultades");
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
