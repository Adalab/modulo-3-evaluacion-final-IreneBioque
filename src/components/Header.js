import Logo from '../images/Logo.png';
import '../styles/layout/_header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Logo-Rick-and-Morty' className='header__img' />
    </header>
  );
};
export default Header;
