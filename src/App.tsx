import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
