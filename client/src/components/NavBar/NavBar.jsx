import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../Search/Search";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Link to="/">
          <button>LANDING</button>
        </Link>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Search></Search>
      </div>
    </div>
  );
};

export default NavBar;
