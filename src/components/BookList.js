import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadBooks } from '../redux/books-dux';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = useSelector((state) => state.list);
  useEffect(()  {

  }, [])
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
