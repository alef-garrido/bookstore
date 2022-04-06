import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books-dux';
import loader from '../assets/Group 156.png';
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
      <div className="book--col-2">
        <img src={loader} alt="" className="loader--display" />
        <div>
          <p className="progress--digit">64%</p>
          <small className="progress--title">Completed</small>
        </div>
      </div>
      <div className="book--col-3">
        <p className="chapter--title">CURRENT CHAPTER</p>
        <p className="chapter--info">Chapter 17</p>
        <button className="chapter--btn" type="button">UPDATE PROGRESS</button>
      </div>
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
