import { Link } from 'react-router-dom';
import '../styles/layout/_characterDetail.scss';
import NotFoundPage from './NotFoundPage';

const ContactDetail = (props) => {
  if (props.character !== undefined) {
    return (
      <div>
        <Link to='/' className='characterDetail__link'>
          <p>Volver atrás</p>
        </Link>
        <article className='character'>
          <img
            className='character__img'
            src={props.character.image}
            alt={props.characterName}
            title={props.characterName}
          />
          <div className='character__list'>
            <h4 className='character__list--name'>{props.character.name}</h4>
            <ul>
              <li>Species: {props.character.species}</li>
              <li>Origin: {props.character.planet}</li>
              <li>Status: {props.character.status}</li>
              <li>Episodes: {props.character.episodes}</li>
            </ul>
          </div>
        </article>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};
export default ContactDetail;
