const { Router } = require("express");
const{
    usuariosGet,
    usuariosPost,
    usuariosPut,
    UsuariosDelete,
} = require("../controllers/usuarios");

const router = Router();

//localhost:3001/usuarios
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/:id", usuariosPut);
router.delete("/", UsuariosDelete);

module.exports = router;