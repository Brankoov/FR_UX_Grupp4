import { useEffect, useState } from "react";
import "app/routes/dark.tsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Ladda användarens tema från localStorage vid komponentens uppstart
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Växla mellan mörkt och ljust läge
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className="logohb">
        <a href="/">
          <img src="/images/Sandys-logo.png" alt="Logga" className="logo" />
        </a>

        <nav className="navbar">
          <a href="/">Startsida</a>
          <a href="/meny">Meny</a>
          <a href="/kontakt">Boka</a>
        </nav>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div>
        <button id="theme-toggle" aria-label="Växla tema" onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
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
