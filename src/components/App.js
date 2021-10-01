import { useEffect, useState } from "react";
import "../styles/App.scss";
import callToApi from "../services/api";
import Form from "./Form";

const App = () => {
  const [character, Setcharacter] = useState([]);
  const [searchName, setSearchName] = useState("");

  // useEffect

  useEffect(() => {
    callToApi(searchName).then((response) => {
      Setcharacter(response);
    });
  }, [searchName]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const renderCharacter = () => {
    return character.map((character) => {
      return (
        <li key={character.id}>
          Nombre: {character.name} Especie: {character.species}{" "}
          <img src={character.image} alt={character.name} />
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Series</h1>

      <Form valueForm={searchName} handleSearchName={handleSearchName} />

      <h2>Personajes con el nombre: {searchName}</h2>
      <ul>{renderCharacter()}</ul>
    </div>
  );
};

export default App;
