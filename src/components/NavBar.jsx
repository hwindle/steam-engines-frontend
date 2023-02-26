import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul id='top-navigation'>
        <li>
          <Link to='/' data-item='Home'>
            Home
          </Link>
        </li>
        {/* <li><Link to='/create' data-item='Find Images'>Find Images</Link></li>
    <li></li> */}
      </ul>
    </nav>
  );
};

export default NavBar;