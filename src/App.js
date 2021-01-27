import "./style.css";
import Navbar from "./Components/Navbar";
import ContactTop from "./Components/ContactTop";
import ContactMobile from "./Components/ContactMobile";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ContactTop />
      <ContactMobile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
