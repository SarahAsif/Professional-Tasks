import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/landing_page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
