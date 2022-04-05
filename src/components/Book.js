import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books-dux';
import '../Styles/book.css';

function Book(props) {
  const { book, id } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li id={id} className="book--item">
      <div className="book--col-1">
        <div className="book--data">
          <small className="data--category">{book.category}</small>
          <p className="data--title">{book.title}</p>
          <small className="data--author">{book.author}</small>
        </div>
        <div className="book--actions">
          <button type="button">Coments</button>
          <button
            type="button"
            onClick={clickHandler}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book--col-2" />
      <div className="book--col-3" />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
