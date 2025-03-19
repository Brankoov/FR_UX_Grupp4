import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main>
      
      <div>
      <header>
      
        <nav className="navbar">
            <a href="/"> Startsida </a>
            
            {/* <a href="/meny">Meny</a> */}
            <a href="/kontakt"> Kontakt </a>
        </nav>
        {/* <img src="images/istockphoto-1382226059-612x612.jpg" alt="Webbutikens logotyp av en bil" class="hero-image"> </img> */}
    </header>
      </div>
      <section className="hero1">
      <h1>Välkommen till vår foodtruck!</h1>

      <p>Upptäck våra goda rätter och kontakta oss vid frågor.</p>
      </section>
    </main>
  );
}