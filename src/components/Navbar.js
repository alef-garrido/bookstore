import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Cateogires</Link>
    </nav>
  );
}

export default Navbar;
