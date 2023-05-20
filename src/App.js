import "./App.css";
import "./fonts/font.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import KeySkills from "./components/KeySkills/KeySkills";
import ContactBox from "./components/ContactBox/ContactBox";

function App() {
  return (
    <div className="App">
      <container>
        <Header />
        <Home />
        <AboutMe />
        <Experience />
        <Education />
        <KeySkills />
        <ContactBox />
        <Footer />
      </container>
    </div>
  );
}

export default App;
