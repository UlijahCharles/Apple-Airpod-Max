import "./App.css";
import Header from "./components/Header.js";
import Design from "./components/Design.js";
import Colors from "./components/Colors.js";
import Audio from "./components/Audio.js";
import Magical from "./components/Magical";
import Buy from "./components/Buy";
import Specs from "./components/Specs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Design />
      <Colors />
      <Audio />
      <Magical />
      <Buy />
      <Specs />
      <Footer />
    </div>
  );
}

export default App;
