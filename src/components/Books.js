import Book from './Book';
import BookForm from './BookForm';

function Books() {
  return (
    <div className="book--list--container">
      <section className="book--list">
        <ul>
          <Book />
        </ul>
      </section>
      <BookForm />
    </div>
  );
}

export default Books;
