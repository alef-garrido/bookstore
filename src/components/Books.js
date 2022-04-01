// import { useSelector } from 'react-redux';
// import Book from './Book';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookForm from './BookForm';
import { apiCallBegan } from '../redux/books';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiCallBegan({
      url: '/books',
      onSucces: 'booksReceived',
    }));
  }, []);
  // const books = useSelector((state) => state.booksReducer);
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          {/* {books.map((book) => <Book key={book.id} book={book} />)} */}
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default Books;
