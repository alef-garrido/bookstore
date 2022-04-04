import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books-dux';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = useSelector((state) => state.books.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, [])
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
        {books ? books.map((book) => <Book id={book[0]} key={book[0]} book={book[1][0]} />) : 'Loading'}
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default BookList;
