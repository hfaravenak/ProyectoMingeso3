import React, { useState, useEffect } from "react";
import styled from "styled-components";


function NavbarComponent2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavStyle isScrolled={isScrolled}>
        <nav className="sticky"></nav>
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <h1 className="app-name">¡Code Mastering!</h1>
          </div>
          <nav></nav>
          <div className="clock">
            <h1></h1>
          </div>
          <a className="btn" href="/">
            <button>Volver al menú principal</button>
          </a>
        </header>
      </NavStyle>
    </>
  );
}

export default NavbarComponent2;

const NavStyle = styled.nav`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => (props.isScrolled ? "#1b3039" : "transparent")};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
    transition: background-color 0.3s ease;
    z-index: 1000;
  }

  .header.scrolled {
    background-color: #1b3039;
  }

  .header .logo {
    margin-right: auto;
    font-family: 'Courier New', monospace;
    color: #fff;
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .header .btn button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .header .btn button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }

  .header .clock {
    margin-top: 20px;
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
  }
`;
