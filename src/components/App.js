import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookList from './BookList';
import Categories from './Categories';
import '../Styles/app.css';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
