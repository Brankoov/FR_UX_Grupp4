import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Telnumber: "",
    eventDate: "",
    serveTime: "",
    eventAdress: "",
    eventZipcode: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)

    // Skicka data till EmailJS
    emailjs
      .send(
        "service_o4bfd5q", // Din tjänst-ID
        "template_gl302kp", // Din mall-ID
        {
          name: formData.name,
          email: formData.email,
          Telnumber: formData.Telnumber,
          eventDate: formData.eventDate,
          serveTime: formData.serveTime,
          eventAdress: formData.eventAdress,
          eventZipcode: formData.eventZipcode,
          subject: formData.subject,
          message: formData.message,
        },
        "hCsWUw6D_HV6MX5JI" // Din användar-ID
      )
      .then(
        (result) => {
          alert("Formuläret skickades!");
          console.log(result.text);
        },
        (error) => {
          alert("Något gick fel. Försök igen senare.");
          console.log(error.text);
        }
      );
  };

  return (
    
    
    
    <div>

     
      <div>
      <header className="navbar">
      
        
        <nav>
          <ul>
           <a href="/"> Startsida </a>
            
            {/* <a href="/meny">Meny</a> */}
            <a href="/kontakt"> Kontakt </a>
          </ul>
        </nav>
          
        {/* <img src="images/istockphoto-1382226059-612x612.jpg" alt="Webbutikens logotyp av en bil" class="hero-image"> </img> */}
    </header>
      </div>

      <div>
      <h1><strong>Kontakta oss</strong></h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="Telnumber">Telefonnummer:</label>
        <input
          type="text"
          id="Telnumber"
          name="Telnumber"
          value={formData.Telnumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventDate">Eventdatum:</label>
        <input
          type="text"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="serveTime">Tid för servering:</label>
        <input
          type="text"
          id="serveTime"
          name="serveTime"
          value={formData.serveTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventAdress">Eventadress:</label>
        <input
          type="text"
          id="eventAdress"
          name="eventAdress"
          value={formData.eventAdress}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventZipcode">Event postnummer:</label>
        <input
          type="text"
          id="eventZipcode"
          name="eventZipcode"
          value={formData.eventZipcode}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Ämne:</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="support">Support</option>
          <option value="sales">Försäljning</option>
          <option value="general">Allmän fråga</option>
        </select>

        <label htmlFor="message">Kommentar/Övriga önskemål</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={10}
          required
        ></textarea>

        <button type="submit">Skicka</button>
      </form>

      <footer>
        Västberga gatan 123, Stockholm, 128 46. Telefon <a href="tel:+4612345678">+46 123 456 78</a>
      </footer>
    </div>
  );
}

