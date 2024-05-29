import personaje from "../models/personaje.models";
import juego from "../models/juegos.models";

export const renderizarPagina = async (req, res) => {
  const personajes = await obetenerTodos();
  const juegos = await obetenerTodosLosJuegos();
  res.render("personajes", { personajes: personajes, juegos: juegos });
};
async function obetenerTodos() {
  try {
    const personajes = await personaje.find({}).populate("Juego_id");
    return personajes;
  } catch (err) {
    console.error("Error al listar personajes:", err);
  }
}
async function obetenerTodosLosJuegos() {
  try {
    const juegos = await juego.find({});
    return juegos;
  } catch (err) {
    console.error("Error al listar juegos:", err);
  }
}
export const crearPersonaje = async (req, res) => {
  const { name, state, play, campaign } = req.body;

  const nuevoPersonaje = new personaje({
    Nombre: name,
    Lugar: state,
    Juego_id: play,
    Campaña: campaign,
  });
  nuevoPersonaje
    .save()
    .then(() => {
      res.redirect("../personajes");
    })
    .catch((error) => {
      console.error("Error al guardar personaje:", error);
    });
};
export const borrarPersonaje = async (req, res) => {
  try {
    await personaje.findByIdAndDelete(req.params.id);
    res.redirect("../../personajes");
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};

export const seleccionarPersonaje = async (req, res) => {
  try {
    const personajes = await obetenerTodos();
    const juegos = await obetenerTodosLosJuegos();
    res.render("personaje", {
      personajes: personajes,
      personaje: personajes[req.params.index],
      juegos: juegos,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
export const actualizarPersonaje = async (req, res) => {
  const { name, state, play, campaign } = req.body;
  const id = req.params.id;
  try {
    personaje
      .findByIdAndUpdate(id, {
        Nombre: name,
        Lugar: state,
        Juego_id: play,
        Campaña: campaign,
      })
      .then(() => {
        res.redirect("../../personajes");
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
