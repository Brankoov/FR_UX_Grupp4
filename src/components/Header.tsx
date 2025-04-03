import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      {/* "navbar" visas ej på mobil pga media-query*/}
      <nav className="navbar">
        <a href="/">Startsida</a>
        <a href="/meny">Meny</a>
        <a href="/kontakt">Boka</a>
      </nav>

      <div className="logohb">
        <img src="/images/Sandys_LOGO.png" alt="Logga" className="logo" />
        {/* Hamburgermeny-knapp (visas endast på mobil) */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen ?
        <nav className="navbar-mobile">
          <a href="/">Startsida</a><br></br>
          <a href="/meny">Meny</a><br></br>
          <a href="/kontakt">Boka</a><br></br>
        </nav>
        : ""}
    </header>
  );
}

export default Header;