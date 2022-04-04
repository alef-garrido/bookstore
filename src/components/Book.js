import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books-dux';

function Book(props) {
  const { book } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    const bookID = { id: book.id };
    dispatch(removeBook(bookID));
  };

  return (
    <li className="book--item">
      <p>{book.title}</p>
      <small>{book.author}</small>
      <button
        type="button"
        onClick={clickHandler}
      >
        DELETE
      </button>
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
