import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books-dux';

function BookForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const submitBook = () => {
    const newBook = {
      title: input.title,
      author: input.author,
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
    }));
  };

  return (
    <section className="book--form-container">
      <form onSubmit={submitHandler} className="book--form">
        <input
          type="text"
          name="title"
          placeholder="Book title"
          onChange={changeHandler}
          value={input.title || ''}
        />
        <input
          type="text"
          name="author"
          placeholder="Who's the author?"
          onChange={changeHandler}
          value={input.author || ''}
        />
        <button
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
