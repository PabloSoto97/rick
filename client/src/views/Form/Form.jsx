import axios from "axios";
import { useState } from "react";
import style from "../Form/Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    species: "",
    gender: "",
    location: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    species: "",
    gender: "",
    location: "",
    image: "",
  });

  const changueHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/morty", form)
      .then((res) => alert("Personaje Creado con exito"))
      .catch((err) => alert(err));
  };

  return (
    <div className={style.container}>
      <div className={style.forms}>
        <form className={style.form} onSubmit={onSubmitHandler}>
          <div className={style.formgroup}>
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              onChange={changueHandler}
              name="name"
            ></input>
          </div>
          <div className={style.formgroup}>
            <label>Species</label>
            <input
              type="text"
              value={form.species}
              onChange={changueHandler}
              name="species"
            ></input>
          </div>
          <div className={style.formgroup}>
            <label>Gender</label>
            <input
              type="text"
              value={form.gender}
              onChange={changueHandler}
              name="gender"
            ></input>
          </div>

          <div className={style.formgroup}>
            <label>Location</label>
            <input
              type="text"
              value={form.location}
              onChange={changueHandler}
              name="location"
            ></input>
          </div>
          <div className={style.formgroup}>
            <label>Image</label>
            <input
              type="text"
              value={form.image}
              onChange={changueHandler}
              name="image"
            ></input>
          </div>

          <button className={style.formsubmitbtn} type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
