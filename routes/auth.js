/* 
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require("express");
const {
  createUser,
  login,
  loginUser,
  tokenRevalidation,
} = require("../controllers/auth");
const router = Router();

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", tokenRevalidation);

module.exports = router;
