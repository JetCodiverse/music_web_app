import "./App.css";
import Brand from "./pages/Brand";
import Footer from "./pages/Footer";
import Search from "./pages/Search";
import UpIcon from "./pages/UpIcon";

function App() {
  return (
    <div>
      <header>
        <Brand />
        <Search />
      </header>
      <UpIcon />
      <main id="main"></main>
      <Footer />
    </div>
  );
}

export default App;
