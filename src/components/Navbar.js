import { Link } from 'react-router-dom';
import '../Styles/nav.css';

function Navbar() {
  return (
    <nav className="navBar--container">
      <h1>Bookstore CMS</h1>
      <Link className="navBar--link" to="/">
        BOOKS
      </Link>
      <Link className="navBar--link" to="/categories">
        CATEGORIES
      </Link>
    </nav>
  );
}

export default Navbar;
