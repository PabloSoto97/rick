const { Router } = require("express");
const { getGenderHandler } = require("../handlers/genderHandlers");

const genderRouter = Router();

genderRouter.get("/", getGenderHandler);

module.exports = genderRouter;
