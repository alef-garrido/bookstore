import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app--container">
      <h1>Werk!</h1>;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
