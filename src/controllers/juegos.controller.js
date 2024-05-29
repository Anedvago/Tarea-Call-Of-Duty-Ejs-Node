import juego from "../models/juegos.models";

export const renderizarPagina = async (req, res) => {
  const juegos = await obetenerTodos();
  res.render("juegos", { juegos: juegos });
};
async function obetenerTodos() {
  try {
    const juegos = await juego.find({});
    return juegos;
  } catch (err) {
    console.error("Error al listar juegos:", err);
  }
}
export const crearJuego = async (req, res) => {
  const { name, developer, date, platforms, genders, rating } = req.body;

  const nuevojuego = new juego({
    Nombre: name,
    Desarrollador: developer,
    Fecha_Lanzamiento: date,
    Plataformas: platforms.split(","),
    Generos: genders.split(","),
    Clasificacion: rating,
  });
  nuevojuego
    .save()
    .then(() => {
      res.redirect("../juegos");
    })
    .catch((error) => {
      console.error("Error al guardar juego:", error);
    });
};
export const borrarJuego = async (req, res) => {
  try {
    await juego.findByIdAndDelete(req.params.id);
    res.redirect("../../juegos");
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};

export const seleccionarJuego = async (req, res) => {
  try {
    const juegos = await obetenerTodos();
    res.render("juego", {
      juegos: juegos,
      juego: juegos[req.params.index],
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
export const actualizarJuego = async (req, res) => {
  const { name, developer, date, platforms, genders, rating } = req.body;
  const id = req.params.id;
  try {
    juego
      .findByIdAndUpdate(id, {
        Nombre: name,
        Desarrollador: developer,
        Fecha_Lanzamiento: date,
        Plataformas: platforms.split(","),
        Generos: genders.split(","),
        Clasificacion: rating,
      })
      .then(() => {
        res.redirect("../../juegos");
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
