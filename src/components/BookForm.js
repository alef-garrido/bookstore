function BookForm() {
  return (
    <section className="book--form-container">
      <form className="book--form">
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="Author" placeholder="Author's name" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
