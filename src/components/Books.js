import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import Book from './Book';
import { loadBooks } from '../redux/books';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  const books = useSelector((state) => state.books.list);
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          {books ? books.map((book) => <Book key={book[0]} book={book[1][0]} />) : 'Loading'}
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default Books;
