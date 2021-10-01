import { useEffect, useState } from "react";
import "../styles/App.scss";
import callToApi from "../services/api";
import Form from "./Form";
import CharactherList from "./CharacterList";

const App = () => {
  const [character, Setcharacter] = useState([]);
  const [searchName, setSearchName] = useState("");



  useEffect(() => {
    callToApi(searchName).then((response) => {
      Setcharacter(response);
    });
  }, [searchName]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

 

   const filteredData = character
      .filter((character) =>
        character.name
          .toLocaleLowerCase()
          .includes(searchName.toLocaleLowerCase())
      )


  return (
    <div>
      <h1>Series</h1>
      <Form valueForm={searchName} handleSearchName={handleSearchName} />
      <h2>Personajes con el nombre: {searchName}</h2>
      <CharactherList data={filteredData} />
    </div>
  );
};

export default App;
