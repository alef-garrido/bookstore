import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookList from './BookList';
import Categories from './Categories';

function App() {
  return (
    <div className="app--container">
      <h1>Bookstore</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
