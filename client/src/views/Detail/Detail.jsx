import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getCharactersById } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCharactersById(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  return (
    <div className={style.container}>
      {character.length > 0 ? (
        <div>
          <h1 className={style.text}>{character[0].name}</h1>
          <div>
            <img
              className={style.img}
              src={character[0].image}
              alt={character[0].name}
            />
          </div>
          <h2 className={style.text}>Location: {character[0].location}</h2>
          <div>
            <br />
            <h3 className={style.text}>Species: {character[0].species}</h3>
            <br />
            <h3 className={style.text}>Gender: {character[0].gender}</h3>
          </div>
        </div>
      ) : (
        <p className={style.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
