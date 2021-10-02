import CharacterCard from './CharacterCard';

const CharactherList = (props) => {
  const characther = props.data.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard characterData={character} />
      </li>
    );
  });
  return (
    <section>
      {props.data.length !== 0 ? (
        <ul>{characther}</ul>
      ) : (
        <p>{`El personaje ${props.searchName} no existe.`}</p>
      )}
    </section>
  );
};
export default CharactherList;
