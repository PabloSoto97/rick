import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenders, createCharacter } from "../../redux/actions";
import style from "./Form.module.css";

const validate = (input) => {
  let error = [];

  if (!input.name) {
    error.name = "The name is required.";
  }
  if (!/^[a-zA-Z ]+$/.test(input.name)) {
    error.name = "The title requires letters";
  }
  if (!/^[a-zA-Z ]+$/.test(input.status)) {
    error.status = "The title requires letters";
  }
  if (!/^[a-zA-Z ]+$/.test(input.species)) {
    error.species = "The title requires letters";
  }

  return error;
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const gender = useSelector((state) => state.genders);

  const [input, setInput] = useState({
    name: "",
    image: "",
    species: "",
    genderId: 0,
    location: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    species: "",
    genderId: "",
    location: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setError(validate({ ...input, [property]: value }));

    setInput({ ...input, [property]: value });
    console.log(input);
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genderId: e.target.value,
    });
  };

  const handleDelete = () => {
    setInput({
      genderId: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input);
    dispatch(createCharacter(input));
    alert("Character Created");

    setInput({
      name: "",
      image: "",
      species: "",
      genderId: 0,
      location: "",
    });
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getGenders());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.forms}>
        <h1> New Character</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={style.formgroup}>
            <label>Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Write your name character...."
              onChange={(e) => handleChange(e)}
            />
            {error.name && <span>{error.name}</span>}
            <br />
          </div>
          <div className={style.formgroup}>
            <label>Image Url:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              placeholder="Url image your character...."
              onChange={(e) => handleChange(e)}
            />
            {error.image && <span>{error.image}</span>}
            <br />
          </div>

          <div className={style.formgroup}>
            <label>Species:</label>
            <input
              type="text"
              value={input.species}
              name="species"
              placeholder="Write species your character...."
              onChange={(e) => handleChange(e)}
            />
            {error.species && <span>{error.species}</span>}
            <br />
          </div>
          <div className={style.formgroup}>
            <label>Location:</label>
            <input
              type="text"
              value={input.location}
              name="location"
              placeholder="Write location your character...."
              onChange={(e) => handleChange(e)}
            />
            {error.location && <span>{error.location}</span>}
            <br />
          </div>
          <div className={style.formgroup}>
            <label>Gender:</label>
            <select
              className={style.formsubmitbtn}
              onChange={(e) => handleSelect(e)}
              defaultValue="default"
            >
              {<option default></option>}
              {gender?.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            <div>
              <button className={style.formsubmitbtn} type="submit">
                Create Character
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
