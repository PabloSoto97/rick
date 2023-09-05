const {
  mortyByName,
  getAllMortys,
  getCharacterById,
  createCH,
  deleteCharacterById,
} = require("../controllers/charactersControllers");

const getMortys = async (req, res) => {
  const { name } = req.query;

  try {
    const results = name ? await mortyByName(name) : await getAllMortys();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.masage });
  }
};
const getMortysID = async (req, res) => {
  const { id } = req.params;
  try {
    const characterId = await getCharacterById(id);
    res.status(200).json(characterId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const createCharacter = async (req, res) => {
  const { name, species, gender, location, image, genderId } = req.body;

  try {
    const newCharacter = await createCH(
      name,
      species,
      gender,

      location,
      image,
      genderId
    );
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteCharacterHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCharacter = await deleteCharacterById(id);
    res.status(200).json(deleteCharacter);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getMortys,
  getMortysID,
  createCharacter,
  deleteCharacterHandler,
};
