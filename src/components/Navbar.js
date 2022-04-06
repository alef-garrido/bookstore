import { Link } from 'react-router-dom';
import '../Styles/nav.css';
import { ImUser } from 'react-icons/im';

function Navbar() {
  return (
    <nav>
      <div className="navBar--container flex-row">
        <div className="navBar--logo ff-Mont fc-blue">
          <h1>Bookstore CMS</h1>
        </div>
        <div className="navBar--menu flex-row">
          <Link className="navBar--link ff-Mont" to="/">
            BOOKS
          </Link>
          <Link className="navBar--link ff-Mont" to="/categories">
            CATEGORIES
          </Link>
          <div className="navBar--logoContainer">
            <ImUser className="navBar--logIcon fc-blue" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
