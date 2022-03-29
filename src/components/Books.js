import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

function Books() {
  const books = useSelector((state) => state.booksReducer);
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
