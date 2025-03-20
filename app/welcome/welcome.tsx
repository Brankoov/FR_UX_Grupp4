import { Link } from "react-router-dom";


export function Welcome() {
  return (
    <main>
      <div>
        <header>
          <nav className="navbar">
            <a href="/">Startsida</a>
            {/* <a href="/meny">Meny</a> */}
            <a href="/kontakt">Kontakt</a>
          </nav>
          {/* Lägg till loggan här */}
          <img src="/images/Group4.png" alt="Logga" className="logo" />
        </header>
      </div>
      <section className="hero1">
        <h1>Välkommen till vår foodtruck!</h1>
        <p>Upptäck våra goda rätter och kontakta oss vid frågor.</p>
      </section>
    </main>
  );
}