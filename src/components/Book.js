import { PropTypes } from 'PropTypes';

function Book(props) {
  const { book } = props;
  return (
    <li key={book.id} className="book--item">
      <p>{book.title}</p>
      <small>{book.author}</small>
      <button type="button">DELETE</button>
    </li>
  );
}

export default Book;

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};