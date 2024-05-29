import perfil from "../models/perfiles.models";
import usuario from "../models/usuarios.models";
import juego from "../models/juegos.models";
import dificultad from "../models/dificultades.models";

export const renderizarPagina = async (req, res) => {
  const perfiles = await obetenerTodos();
  const usuarios = await obetenerTodosLosUsuarios();
  const juegos = await obetenerTodosLosJuegos();
  const dificultades = await obetenerTodasLasDificultades();
  res.render("perfiles", {
    perfiles: perfiles,
    usuarios: usuarios,
    juegos: juegos,
    dificultades: dificultades,
  });
};
async function obetenerTodos() {
  try {
    const perfiles = await perfil
      .find({})
      .populate("Juego_Id")
      .populate("Usuario_Id")
      .populate("Dificultad_Id");
    return perfiles;
  } catch (err) {
    console.error("Error al listar perfiles:", err);
  }
}
async function obetenerTodosLosUsuarios() {
  try {
    const usuarios = await usuario.find({});
    return usuarios;
  } catch (err) {
    console.error("Error al listar perfiles:", err);
  }
}
async function obetenerTodosLosJuegos() {
  try {
    const juegos = await juego.find({});
    return juegos;
  } catch (err) {
    console.error("Error al listar perfiles:", err);
  }
}
async function obetenerTodasLasDificultades() {
  try {
    const dificultades = await dificultad.find({});
    return dificultades;
  } catch (err) {
    console.error("Error al listar perfiles:", err);
  }
}
export const crearPerfil = async (req, res) => {
  const { name, user, play, difficulty } = req.body;
  const nuevoperfile = new perfil({
    Nombre: name,
    Usuario_Id: user,
    Juego_Id: play,
    Dificultad_Id: difficulty,
  });
  nuevoperfile
    .save()
    .then(() => {
      res.redirect("../perfiles");
    })
    .catch((error) => {
      console.error("Error al guardar perfile:", error);
    });
};
export const borrarPerfil = async (req, res) => {
  try {
    await perfil.findByIdAndDelete(req.params.id);
    res.redirect("../../perfiles");
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};

export const seleccionarPerfil = async (req, res) => {
  try {
    const perfiles = await obetenerTodos();
    const usuarios = await obetenerTodosLosUsuarios();
    const juegos = await obetenerTodosLosJuegos();
    const dificultades = await obetenerTodasLasDificultades();
    res.render("perfil", {
      perfiles: perfiles,
      usuarios: usuarios,
      juegos: juegos,
      dificultades: dificultades,
      perfil: perfiles[req.params.index],
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
export const actualizarPerfil = async (req, res) => {
  const { name, user, play, difficulty } = req.body;
  const id = req.params.id;
  try {
    perfil
      .findByIdAndUpdate(id, {
        Nombre: name,
        Usuario_Id: user,
        Juego_Id: play,
        Dificultad_Id: difficulty,
      })
      .then(() => {
        res.redirect("../../perfiles");
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
