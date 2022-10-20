import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/comfortaa";
import Login from "./Login";
import Err from "./Err";
import Dashboard from "./Dashboard";
import footer from "./p3.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className=" row d-flex justify-content-center align-items-center h-25 m-5 ">
          <img
            src={require("./j2.svg").default}
            alt="mySvgImage"
            className="svg m-5"
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/error" element={<Err />} />
          </Routes>
        </BrowserRouter>

        <footer className="text-center text-danger">
          <p>Version: 1.1.9</p>
          <img src={footer} />
        </footer>
      </div>
    </div>
  );
}
export default App;
