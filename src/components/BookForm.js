import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books-dux';
import '../Styles/bookForm.css';

function BookForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
  });

  const submitBook = () => {
    const newBook = {
      title: input.title,
      author: input.author,
      category: input.category,
    };
    dispatch(addBook(newBook));
  };

  const changeHandler = (e) => (
    setInput((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    ))
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setInput(() => ({
      title: '',
      author: '',
      category: '',
    }));
  };

  return (
    <section className="book--form-container">
      <h5 className="book--form-title">ADD NEW BOOK</h5>
      <form onSubmit={submitHandler} className="book--form">
        <input
          className="form--input"
          type="text"
          name="title"
          placeholder="Book title"
          onChange={changeHandler}
          value={input.title || ''}
        />
        <input
          className="form--input"
          type="text"
          name="author"
          placeholder="Who's the author?"
          onChange={changeHandler}
          value={input.author || ''}
        />
        <select
          name="category"
          className="form--input"
          onChange={changeHandler}
          value={input.category || ''}
        >
          <option value="0">Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Magic-Realism">Magic-Realism</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button
          className="form--bttn"
          type="submit"
          onClick={submitBook}
        >
          ADD BOOK
        </button>

      </form>
    </section>
  );
}

export default BookForm;
