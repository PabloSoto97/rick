import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
const CardsContainer = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={style.container}>
      <div className={style.cardscontainer}>
        {characters.map((character) => {
          return (
            <Card
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              location={character.location}
              image={character.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CardsContainer;
