import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import Book from './Book';
import { apiCallBegan } from '../redux/books';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiCallBegan({
      url: '/books',
      method: 'GET',
      onSucces: 'books/booksReceived',
    }));
  }, []);
  const books = useSelector((state) => state.entities.books);
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          {books.map((book) => <Book key={book.id} book={book} />)}
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default Books;
