import { useEffect, useState } from "react";
import Paginated from "../../components/Paginated/Paginated";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacters,
  getGenders,
  cleanDetail,
  resetPage,
  filterByOrder,
} from "../../redux/actions";
import style from "../Home/Home.module.css";
import Card from "../../components/Card/Card";

const Home = () => {
  const [order, setOrder] = useState("");
  const [charactersPerPage, setCharactersPerPage] = useState(12);
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const genders = useSelector((state) => state.genders);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getGenders());
    dispatch(cleanDetail());
  }, [dispatch]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexofFirtsCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexofFirtsCharacter,
    indexOfLastCharacter
  );

  const paginated = (currentPage) => {
    dispatch(resetPage(currentPage));
  };

  function handleCharacters(e) {
    dispatch(getCharacters());
    paginated(1);
  }

  function handleFilterByOrder(e) {
    dispatch(filterByOrder(characters, e.target.value));
    dispatch(resetPage(1));
    setOrder(`Order ${e.target.value}`);
  }

  return (
    <div>
      <div className={style.containerbut}>
        <select
          className={style.button}
          onChange={(e) => handleFilterByOrder(e)}
        >
          <option value="orderAZ">Characters A-Z</option>
          <option value="orderZA">Characters Z-A</option>
        </select>
        <div>
          <button className={style.button} onClick={(e) => handleCharacters(e)}>
            Refresh
          </button>
        </div>
      </div>
      <div className={style.cardscontainer}>
        {currentCharacters.map((character) => {
          return (
            <Card
              id={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
            />
          );
        })}
      </div>
      <Paginated
        charactersPerPage={charactersPerPage}
        characters={characters.length}
        paginated={paginated}
      />
    </div>
  );
};

export default Home;
