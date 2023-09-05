const { Gender } = require("../db");

const getDBByGender = async () => {
  const genders = ["Female", "Male", "Genderless", "unknown"];

  genders.forEach((element) => {
    Gender.findOrCreate({
      where: { name: element },
    });
  });

  const allGenders = await Gender.findAll();
  console.log(allGenders);
  return allGenders;
};

module.exports = {
  getDBByGender,
};
