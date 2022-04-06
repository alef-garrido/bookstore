import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books-dux';
import Book from './Book';
import BookForm from './BookForm';
import '../Styles/bookList.css';

function BookList() {
  const books = useSelector((state) => state.Books.list);
  const status = useSelector((state) => state.Books.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          {status ? 'Loading' : books.map((book) => <Book id={book[0]} key={book[0]} book={book[1][0]} />)}
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default BookList;
