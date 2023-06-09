import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <a href="#home"><li id='home'>home</li></a>
        <a href="#about-me"><li >About</li></a>
        <a href="#resume"><li >resume</li></a>
        <a href="#contact"><li >contact</li></a>
       
      </ul>

      <style>
        {`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger-line {
          width: 100%;
          height: 3px;
          background-color: black;
        }

        .menu {
          list-style: none;
          padding: 0;
          display: none;
          
        }

        @media (min-width: 768px) {
          /* Styles for screens wider than 768px */
          .hamburger {
            display: none;
            
          }

          .menu {
            display: flex;
            justify-content: end;
            background-color:var(--secondary-color)
          }
        }

        /* Styles for the open menu */
        .open .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .open .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}
      </style>
    </div>
  );
};

export default HamburgerMenu;
