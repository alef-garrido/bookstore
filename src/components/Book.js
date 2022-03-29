import { PropTypes } from 'prop-types';

function Book(props) {
  const { book } = props;
  return (
    <li className="book--item">
      <p>{book.title}</p>
      <small>{book.author}</small>
      <button type="button">DELETE</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
