const { Router } = require("express");

const {
  getMortys,
  getMortysID,
  createCharacter,
  deleteCharacterHandler,
} = require("../handlers/charactersHandlers");
const mortyRouter = Router();

mortyRouter.get("/", getMortys);

mortyRouter.get("/:id", getMortysID);

mortyRouter.post("/", createCharacter);
mortyRouter.delete("/:id", deleteCharacterHandler);

module.exports = mortyRouter;
