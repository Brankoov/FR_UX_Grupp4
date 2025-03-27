import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main>
      <div>
        <header>
          <nav className="navbar">
            <a href="/">Startsida</a>
            <a href="/meny">Meny</a>
            <a href="/kontakt">Boka catering</a>
          </nav>
          <img src="/images/Group4.png" alt="Logga" className="logo" />
        </header>
      </div>
      <section className="hero1">
        <h1>
          upptäck en värld av passion och tadition- två unika smakupplevelser
        </h1>
        <div className="image-container">
          <img
            src="images/foodtruckbild.JPG"
            alt="Matbild"
            className="matbild1-image"
          />
          <Link to="/kontakt">
            <button className="kontakt-button">bokningsförfrågan</button>
          </Link>
        </div>
      </section>

      <footer>
        Någon gata 123, Stockholm, 128 46. Telefon{" "}
        <a href="tel:+4612345678">+46 123 456 78</a>
      </footer>
    </main>
  );
}
