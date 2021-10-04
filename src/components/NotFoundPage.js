import { Link } from 'react-router-dom';
import Portal from '../images/portal.png';
import '../styles/layout/_notfoundpage.scss';

const NotFoundPage = () => {
  return (
    <div className='notFoundPage'>
      <p className='notFoundPage__text'>
        Página no encontrada. Rápido Morty, vuelve por el portal{' '}
      </p>
      <Link to='/'>
        <img
          className='notFoundPage__img'
          src={Portal}
          alt='Portal, volver a página de inicio'
        />
      </Link>
    </div>
  );
};
export default NotFoundPage;
