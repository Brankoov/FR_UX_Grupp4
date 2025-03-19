import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main>
      <h1>Välkommen till vår foodtruck!</h1>
      <p>Upptäck våra goda rätter och kontakta oss vid frågor.</p>
      <Link to="/kontakt">
        <button>Kontakta oss</button>
      </Link>
    </main>
  );
}