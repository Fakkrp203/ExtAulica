import Home from "./components/Home";
import Instituto from "./components/Instituto";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FmiES from "./components/FmIes";
import Biblioteca from "./components/Biblioteca";
import Proyectos from "./components/Proyectos";

const App = () => {
  return (
      <div className="App dark:bg-dark-gray dark:text-dark-card transition-all duration-1000">
        <Navbar className="transition-colors ease-in-out duration-500" />
        {/* rutas */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/instituto" element={<Instituto />}></Route>
          <Route path="/fmIES" element={<FmiES />}></Route>
          <Route path="/biblioteca" element={<Biblioteca />}></Route>
          <Route path="/proyectos" element={<Proyectos/>}></Route>
        </Routes>
      </div>
  );
};

export default App;
