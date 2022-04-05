import { Link } from 'react-router-dom';
import '../Styles/nav.css';
import { ImUser } from 'react-icons/im';

function Navbar() {
  return (
    <nav>
      <div className="navBar--container">
        <div className="navBar--logo">
          <h1>Bookstore CMS</h1>
        </div>
        <div className="navBar--menu">
          <Link className="navBar--link" to="/">
            BOOKS
          </Link>
          <Link className="navBar--link" to="/categories">
            CATEGORIES
          </Link>
          <div className="navBar--logoContainer">
            <ImUser className="navBar--logIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
