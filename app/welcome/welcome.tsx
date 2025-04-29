import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "~/components/Footer";
import styles from "~/components/welcome.module.css";
 
export function Welcome() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className={styles.welcomeSection}>
        <div className={styles["welcome-container"]}>
          <div className={styles["welcome-text"]}>
            <h1>Välkommen!</h1>
            <h2>Sandys Foodtruck & Catering - Mat med passion!</h2>
            <p>
              Här hittar du streetfood med kärlek till råvaror, smaker och
              människor. Sandra, grundaren bakom Sandys, lagar all mat från
              grunden med noga utvalda ingredienser och samarbeten med lokala
              producenter som brödet från bagaren i Göteborg och köttet från
              kötthandlaren Tina intill. Förvänta dig vällagad, smakrik mat med
              en personlig touch oavsett om du är ute efter en snabb lunch eller
              något riktigt gott att ta med.
            </p>
          </div>
          <div className={styles["welcome-image"]}>
            <img src="images/formulärbild.png" alt="bild på sandra" />
          </div>
        </div>
        <Link to="/kontakt" style={{ textDecoration: "none" }}>
          <button className={styles["kontakt-button-start"]}>
            Bokningsförfrågan
          </button>
        </Link>
      </section>
 
      <section className={styles["social-section"]}>
        <div className={styles["social-container"]}>
          <h1> Se vart vi är just nu- Följ oss på sociala medier. </h1>
          <div className={styles["social-icons"]}>
            <a href="https://www.facebook.com/p/Sandys-Food-Truck-Catering-61565706599006/">
              <img src="/images/Facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sandysfoodtruckochcatering/?hl=sv">
              <img src="/images/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </section>
 
      <section className={styles["event-section"]}>
        <h1> Vad passar ditt event?</h1>
        <br />
        <div className={styles["event-container"]}>
          <div className={styles["event-item"]}>
            <h3>Foodtruck - Matglädje på hjul!</h3>
            <p>
              Perfekt för utomhusevent, mingel och födelsedagar vi rullar in,
              serverar och sprider matglädje direkt från vår färgsprakande
              truck!
            </p>
            <img src="/images/startsida-matbild.jpg" alt="foodtruck" />
          </div>
          <div className={styles["event-item"]}>
            <h3>Catering En sittande smakupplevelse!</h3>
            <p>
              För studenten, företagsevent eller födelsedagsfesten vi levererar
              vällagad mat som serveras med omtanke och känsla, anpassat efter
              dina önskemål. Välj mellan 3 olika bufféer.
            </p>
            <img src="/images/vanbild.png" alt="catering" />
          </div>
        </div>
 
        <Link to="/kontakt" style={{ textDecoration: "none" }}>
          <button className={styles["kontakt-button-start"]}>
            Bokningsförfrågan
          </button>
        </Link>
      </section>
 
      <Footer />
    </main>
  );
}