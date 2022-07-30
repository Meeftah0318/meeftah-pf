import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="row justify-content-center">
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
