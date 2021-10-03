import { Link } from 'react-router-dom';
import '../styles/layout/_characterList.scss';

const CharacterCard = (props) => {
  return (
    <Link to={`./character/${props.characterData.id}`}>
      <>
        <img
          className='list__element--img'
          src={props.characterData.image}
          alt={`Foto de ${props.characterData.name}`}
          title={`Foto de ${props.characterData.name}`}
        />
        <h4 className='list__element--text'>{props.characterData.name}</h4>
        <p className='list__element--text'>{props.characterData.species}</p>
      </>
    </Link>
  );
};

export default CharacterCard;
