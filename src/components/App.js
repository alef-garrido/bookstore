import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app--container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
