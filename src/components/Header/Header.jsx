import NavComponent from "../NavComponent/NavComponent";
import "./Header.css";
const Header = () => {
  return (
    <header>
      {/* <NavComponent/> */}
      <ul>
       
        <a href="#home"><li id="home">Home</li></a>
        <a href="#about-me"><li>About</li></a>
        <a href="#resume"><li>Resume</li></a>
        <a href="#contact"><li>Contact</li></a>
      
      </ul>
    </header>
  );
};

export default Header;
