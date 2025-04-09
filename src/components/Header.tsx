import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="logohb">
        <img src="/images/Sandys_LOGO.png" alt="Logga" className="logo" />

        {/* Visa navbar endast på desktop */}
        <nav className="navbar">
          <a href="/">Startsida</a>
          <a href="/meny">Meny</a>
          <a href="/kontakt">Boka</a>
        </nav>

        {/* Hamburgermeny endast på mobil */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobilmeny */}
      {isOpen && (
        <nav className="navbar-mobile">
          <a href="/">Startsida</a>
          <a href="/meny">Meny</a>
          <a href="/kontakt">Boka</a>
        </nav>
      )}
    </header>

  );
}

export default Header;