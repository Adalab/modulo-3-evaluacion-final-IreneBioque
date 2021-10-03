import CharacterCard from './CharacterCard';
import '../styles/layout/_characterList.scss';

const CharactherList = (props) => {
  const characther = props.data.map((character) => {
    return (
      <li key={character.id} className='list__element'>
        <CharacterCard characterData={character} />
      </li>
    );
  });
  return (
    <section className='sectionCharacter'>
      {props.data.length !== 0 ? (
        <ul className='list'>{characther}</ul>
      ) : (
        <p className='error'>{`El personaje ${props.searchName} no existe en esta dimensión o galaxia.`}</p>
      )}
    </section>
  );
};
export default CharactherList;
