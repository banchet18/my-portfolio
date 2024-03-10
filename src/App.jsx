import "./App.css";
import Header from "./components/Header/Header";
import Project from "./pages/Projects/Project";
import Home from "./pages/Home/Home";
import BackgroundComp from "./components/BackgroundComp";
import About from "./pages/About/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <BackgroundComp />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
