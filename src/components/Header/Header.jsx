import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="navigation">
        <ul>
          <a href="#home">
            <li id="home">Home</li>
          </a>
          <a href="#about-me">
            <li>About</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
