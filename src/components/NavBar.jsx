import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav id='main-nav'>
      <ul className='top-navigation'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/addengine'>Add Engine</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
