const { Router } = require("express");
const mortyRouter = require("./mortyRouter");
const genderRouter = require("./genderRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/morty", mortyRouter);
router.use("/gender", genderRouter);

module.exports = router;
