import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Games from "./components/Games";
import Chart from "./components/Chart";
import Rate from "./components/Rate";
import Last from "./components/Last";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Games />
      <Rate />
      <Chart />
      <Last />
      <Footer />
    </div>
  );
}

export default App;
