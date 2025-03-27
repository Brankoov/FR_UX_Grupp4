import { Link } from "react-router-dom";
import Header from "src/components/Header"
import Footer from "~/components/Footer";

export function Welcome() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="hero1">
        <h1>
          upptäck en värld av passion och tadition- två unika smakupplevelser
        </h1>
        <div className="main-container">
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

      <Footer />
    </main>
  );
}
