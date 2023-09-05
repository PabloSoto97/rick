import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.mensaje}>
          <div className={style.msj1}>Welcome to my </div>
          <div className={style.msj2}>App</div>
        </div>
        <div>
          <Link to="/Home">
            <button className={style.btn}>ENTER CHARACTERS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
