import { Link } from "react-router-dom";
import Header from "src/components/Header"
import Footer from "~/components/Footer";

export function Welcome() {
  return (
    <main>
      <div>
       <Header />
      </div>
      <section className="main-container">
        <h1>Välkommen till Sandys foodtruck!</h1>
        <p>Upptäck våra goda rätter och kontakta oss vid frågor.</p>
      </section>

      <Footer />

    </main>
  );
}