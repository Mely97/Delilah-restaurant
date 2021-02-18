const jwt = require("jsonwebtoken");
const CLAVE_CIFRADO_SERVER = "PROYECTO3DELILAHACAMICA";
const conexion = require("./conexion");
/*const Sequelize = require("sequelize");
const conexion = new Sequelize(
  "mysql://root:97040908955@localhost:3306/delilah"
);*/

module.exports = {
  validarInfoCompletaUsuario,
  validarInfoCompletaProducto,
  verificarIdExistenteProductos,
  verificarIdExistentePedidos,
  validarUsuarioContrasena,
  habilitarPermisosAdministrador,
  verificarLogIn,
  validarInfoCompletaPedido,
};

let verificarToken;

function validarInfoCompletaUsuario(req, res, next) {
  const {
    nombredeusuario,
    contrasena,
    nombre,
    apellido,
    email,
    telefono,
    direccion,
  } = req.body;
  if (
    !nombredeusuario ||
    !contrasena ||
    !nombre ||
    !apellido ||
    !email ||
    !telefono ||
    !direccion
  ) {
    res.status(400).json({
      ok: false,
      res: "Debe completar todos los datos para la creación de la cuenta",
    });
  } else {
    next();
  }
}
function validarInfoCompletaProducto(req, res, next) {
  const { nombre, precio, ingredientes } = req.body;
  if (!nombre || !precio || !ingredientes) {
    res.status(400).json({
      ok: false,
      res:
        "Debe completar todos los datos para la creación de un producto nuevo",
    });
  } else {
    next();
  }
}
function verificarIdExistenteProductos(req, res, next) {
  conexion
    .query("SELECT * FROM productos WHERE id = ?", {
      replacements: [req.params.id],
      type: conexion.QueryTypes.SELECT,
    })
    .then((producto) => {
      if (producto != 0) {
        next();
      } else {
        res.status(404).json({
          ok: false,
          res: "No se encontró ningún producto registrado con ese id.",
        });
      }
    });
}
function verificarIdExistentePedidos(req, res, next) {
  conexion
    .query("SELECT * FROM pedidos WHERE id = ?", {
      replacements: [req.params.id],
      type: conexion.QueryTypes.SELECT,
    })
    .then((pedido) => {
      if (pedido != 0) {
        next();
      } else {
        res.status(404).json({
          ok: false,
          res: "No se encontró ningún pedido registrado con ese id.",
        });
      }
    });
}
function validarUsuarioContrasena(req, res, next) {
  conexion
    .query("SELECT * FROM usuarios WHERE nombredeusuario = ?", {
      replacements: [req.body.nombredeusuario],
      type: conexion.QueryTypes.SELECT,
    })
    .then((usuario) => {
      if (usuario.length == 0) {
        res
          .status(401)
          .json({ ok: false, res: "error en usuario o contrasena" });
      }
      if (usuario[0].contrasena == req.body.contrasena) {
        next();
      } else {
        res
          .status(401)
          .json({ ok: false, res: "error en usuario o contrasena" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
function habilitarPermisosAdministrador(req, res, next) {
  const tokenRecibido = req.headers.authorization;
  verificarToken = jwt.verify(tokenRecibido, CLAVE_CIFRADO_SERVER);
  console.log({ verificarToken });
  conexion
    .query("SELECT * FROM usuarios WHERE nombredeusuario = ?", {
      replacements: [verificarToken.nombredeusuario],
      type: conexion.QueryTypes.SELECT,
    })
    .then((usuario) => {
      if (usuario[0].is_admin == "true") {
        next();
      } else {
        res.status(401).json({
          ok: false,
          res:
            "No posees los permisos necesarios para la acción que deseas realizar",
        });
      }
    });
}
function verificarLogIn(req, res, next) {
  const headerAutorizacion = req.headers.authorization;
  if (headerAutorizacion != undefined) {
    next();
  } else {
    res.status(401).json({
      ok: false,
      res: "Debes iniciar sesion, dirígete a /usuarios/login",
    });
  }
}
function validarInfoCompletaPedido(req, res, next) {
  const { productos, mododepago } = req.body;
  if (!productos || !mododepago) {
    res.status(400).json({
      ok: false,
      res: "Debe completar todos los datos para la creación de un pedido nuevo",
    });
  } else {
    next();
  }
}
