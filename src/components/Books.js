import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
// import Book from './Book';
import { loadBooks } from '../redux/books';

const Books = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  const books = useSelector((state) => state.books);
  console.log(books);
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          {books ? books.map((book) => {
            console.log(book);
            return console.log(book[0]);
          }) : 'Add books'}
        </ul>
      </section>
      <BookForm />
    </div>
  );
};

export default Books;
