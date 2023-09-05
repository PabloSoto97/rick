const axios = require("axios");
const { Character, Gender } = require("../db");

const getAllMortys = async () => {
  const dbcharacter = await getDbInfo();
  const apicharacter = await getApiInfo();

  return [...dbcharacter, ...apicharacter];
};

// const getApiInfo = async () => {
//   const url = await axios.get("https://rickandmortyapi.com/api/character/");
//   const resp = url.data.results.map((results) => {
//     return {
//       id: results.id,
//       name: results.name,
//       species: results.species,
//       gender: results.gender,

//       location: results.location.name,
//       image: results.image,
//       created: false,
//     };
//   });
//   return resp;
// };

const getApiInfo = async () => {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  let allCharacters = [];
  let characterCount = 0; // Contador de personajes

  async function fetchCharacters(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;

      // Calcular cuántos personajes se agregarán de esta página
      const charactersToAdd = Math.min(
        60 - characterCount, // Límite de 60 personajes
        data.results.length // Cantidad de personajes en la página actual
      );

      // Agregar los personajes de la página actual a la lista
      allCharacters = allCharacters.concat(
        data.results.slice(0, charactersToAdd).map((character) => ({
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          location: character.location.name,
          image: character.image,
          created: false,
        }))
      );

      characterCount += charactersToAdd;

      // Verificar si se ha alcanzado el límite de 60 personajes
      if (characterCount < 40 && data.info.next) {
        // Si no se ha alcanzado el límite y hay una página siguiente, realizar una solicitud recursiva
        await fetchCharacters(data.info.next);
      }
    } catch (error) {
      console.error("Error al obtener personajes:", error);
    }
  }

  await fetchCharacters(baseUrl);

  return allCharacters;
};
const getDbInfo = async () => {
  const characterdb = await Character.findAll({
    attributes: ["id", "name", "species", "location", "image", "createdMyDb"],
    include: {
      model: Gender,
      attributes: ["name"],
    },
  });

  let response = await characterdb.map((element) => {
    return {
      id: element.id,
      name: element.name,
      species: element.species,
      gender: element.gender.name, // Obtener el nombre del género como un string
      location: element.location,
      image: element.image,
      createdMyDb: element.createdMyDb,
    };
  });

  return response;
};

const mortyByName = async (name) => {
  const characters = await getAllMortys();
  const filterpj = characters.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  return filterpj;
};

const getCharacterById = async (id) => {
  const characters = await getAllMortys();
  let characterById = await characters.filter((element) => element.id == id);
  return characterById;
};

const createCH = async (
  name,
  species,
  gender,

  location,
  image,
  genderId
) => {
  const newCharacter = await Character.create({
    name,
    species,
    gender,

    location,
    image,
  });
  await newCharacter.setGender(genderId);
  return newCharacter;
};
const deleteCharacterById = async (id) => {
  const deleteId = await Character.findByPk(id);
  if (!deleteId) {
    return "Error: id not found";
  } else {
    await deleteId.destroy();
  }
  return "Character delete";
};

module.exports = {
  getAllMortys,
  mortyByName,
  getCharacterById,
  createCH,
  deleteCharacterById,
};
