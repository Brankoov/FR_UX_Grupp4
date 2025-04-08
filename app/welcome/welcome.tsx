import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "~/components/Footer";

export function Welcome() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-text">
            <h1>Välkommen!</h1>
            <h2>Sandys Foodtruck & Catering - Mat med passion!</h2>
            <p>
              Här hittar du streetfood med kärlek till råvaror, smaker och
              människor. Sandra, grundaren bakom Sandys, lagar all mat från
              grunden med noga utvalda ingredienser och samarbeten med lokala
              producenter som brödet från bagaren i Göteborg och köttet från
              kötthandlaren Tina intill.
              <br />
              <br />
              Förvänta dig vällagad, smakrik mat med en personlig touch oavsett
              om du är ute efter en snabb lunch eller något riktigt gott att ta
              med.
            </p>
            <Link to="/kontakt">
              <button className="kontakt-button">Bokningsförfrågan</button>
            </Link>
          </div>
          <div className="welcome-image">
            <img src="/formulärbild.png" alt="Sandra i foodtrucken" />
          </div>
        </div>
      </section>

      <section className="hero1"></section>

      <Footer />
    </main>
  );
}
