/* 
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { fieldValidator } = require("../middlewares/fields-validators");
const {
  createUser,
  loginUser,
  tokenRevalidation,
} = require("../controllers/auth");
const { jwtValidator } = require("../middlewares/jwt-validator");

router.post(
  "/new",
  [
    // middlewares
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be greater than 6 characters").isLength({
      min: 6,
    }),
    fieldValidator,
  ],
  createUser
);

router.post(
  "/",
  [
    // middlewares
    check("email", "Email is required").isEmail(),
    check("password", "Password should be greater than 6 characters").isLength({
      min: 6,
    }),
    fieldValidator,
  ],
  loginUser
);

router.get("/renew", jwtValidator, tokenRevalidation);

module.exports = router;
