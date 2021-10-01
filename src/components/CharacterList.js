 import CharacterCard from "./CharacterCard";

 const CharactherList = (props) => {
    return props.data.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard characterData={character}/>
        </li>
      );
    });
  };
export default CharactherList;
