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

  const getProgress = (max) => Math.floor(Math.random() * max);

  return (
    <li id={id} className="book--item brdr-gray w-100">
      <div className="book--col-1">
        <div className="book--data">
          <small className="data--category ff-Mont">{book.category}</small>
          <p className="data--title w-100 ff-RobSlab">{book.title}</p>
          <small className="data--author ff-RobSlab fc-blue fw-300">{book.author}</small>
        </div>
        <div className="book--actions">
          <button className="ff-RobSlab fc-blue brdr-no" type="button">Coments</button>
          <button
            className="ff-RobSlab fc-blue brdr-no"
            type="button"
            onClick={clickHandler}
          >
            Remove
          </button>
          <button className="ff-RobSlab fc-blue" type="button">Edit</button>
        </div>
      </div>
      <div className="book--col-2 flex-row">
        <img src={loader} alt="" className="loader--display" />
        <div>
          <p className="progress--digit ff-Mont">
            {`${getProgress(100)}%`}
          </p>
          <small className="progress--title ff-Mont fc-gray">Completed</small>
        </div>
      </div>
      <div className="book--col-3">
        <p className="chapter--title fc-gray ff-RobSlab fw-300">CURRENT CHAPTER</p>
        <p className="chapter--info w-100 ff-RobSlab fw-300">
          {' '}
          {`Chapter: ${getProgress(10)}`}
          7
        </p>
        <button className="chapter--bttn fc-white bck-blue ff-RobSlab brdr-no" type="button">UPDATE PROGRESS</button>
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
