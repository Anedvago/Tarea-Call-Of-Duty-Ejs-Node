import usuario from "../models/usuarios.models";

export const renderizarPagina = async (req, res) => {
  const usuarios = await obetenerTodos();
  res.render("usuarios", { usuarios: usuarios });
};
async function obetenerTodos() {
  try {
    const usuarios = await usuario.find({});
    return usuarios;
  } catch (err) {
    console.error("Error al listar usuarios:", err);
  }
}
export const crearUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  const nuevoUsuario = new usuario({
    Nombre: name,
    Email: email,
    Contraseña: password,
  });
  nuevoUsuario
    .save()
    .then(() => {
      res.redirect("../usuarios");
    })
    .catch((error) => {
      console.error("Error al guardar usuario:", error);
    });
};
export const borrarUsuario = async (req, res) => {
  try {
    await usuario.findByIdAndDelete(req.params.id);
    res.redirect("../../usuarios");
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};

export const seleccionarUsuario = async (req, res) => {
  try {
    const usuarios = await obetenerTodos();
    res.render("usuario", {
      usuarios: usuarios,
      usuario: usuarios[req.params.index],
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
export const actualizarUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  const id = req.params.id;
  try {
    usuario
      .findByIdAndUpdate(id, {
        Nombre: name,
        Email: email,
        Contraseña: password,
      })
      .then(() => {
        res.redirect("../../usuarios");
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Enviar un código de estado 500 en caso de error
  }
};
