import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Stäng mobilmenyn om skärmstorleken blir bredare än 955px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 955 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header>
      <div className="logohb">
        <img src="/images/Sandys-logo.png" alt="Logga" className="logo" />

        <nav className="navbar">
          <a href="/">Startsida</a>
          <a href="/meny">Meny</a>
          <a href="/kontakt">Boka</a>
        </nav>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="navbar-mobile">
          <a href="/" onClick={() => setIsOpen(false)}>Startsida</a>
          <a href="/meny" onClick={() => setIsOpen(false)}>Meny</a>
          <a href="/kontakt" onClick={() => setIsOpen(false)}>Boka</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
