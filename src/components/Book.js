const dummyData = [
  {
    i: 1,
    title: 'Do androids dream of electric sheeps?',
    author: 'Philip K. Dick',
  },
  {
    i: 2,
    title: 'La casa de los espiritus',
    author: 'Isabel Allende',
  },
];

function Book() {
  return (
    <>
      {dummyData.map((book) => (
        <li key={book.i} className="book--item">
          <p>{book.title}</p>
          <small>{book.author}</small>
          <button type="button">DELETE</button>
        </li>
      ))}
    </>
  );
}

export default Book;
