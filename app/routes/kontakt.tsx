export default function Kontakt() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert("Formuläret skickades! Hantering av meddelanden kan implementeras här.");
    };
  
    return (
      <div>
        <h1><strong>Kontakta oss</strong></h1>
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="subject">Ämne:</label>
          <select id="subject" name="subject">
            <option value="support">Support</option>
            <option value="sales">Försäljning</option>
            <option value="general">Allmän fråga</option>
          </select>
  
          <label htmlFor="message">Meddelande:</label>
          <textarea id="message" name="message" rows={5} required></textarea>
  
          <label>
            <input type="checkbox" id="privacy" name="privacy" required />
            Jag godkänner <a href="integritetspolicy.html">integritetspolicyn</a>.
          </label>
  
          <button type="submit">Skicka</button>
        </form>
  
        <footer>
          Västberga gatan 123, Stockholm, 128 46. Telefon <a href="tel:+4612345678">+46 123 456 78</a>
        </footer>
      </div>
    );
  }