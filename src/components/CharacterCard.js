import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`./character/${props.characterData.id}`}>
      <>
        <img
          className="card__img"
          src={props.characterData.image}
          alt={`Foto de ${props.characterData.name}`}
          title={`Foto de ${props.characterData.name}`}
        />
        <h4>{props.characterData.name}</h4>
        <p>{props.characterData.species}</p>
      </>
    </Link>
  );
};


export default CharacterCard;
