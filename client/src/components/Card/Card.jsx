import style from "../Card/Card.module.css";
import { NavLink } from "react-router-dom";
import React from "react";
const Card = (props) => {
  return (
    <div className={style.card}>
      <NavLink to={`/morty/${props.id}`}>
        <div>
          <div className={style.text}>{props.name}</div>
          <div>
            <img className={style.img} src={props.image}></img>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default Card;
