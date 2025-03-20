import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";


export default function Kontakt() {
  const [formData, setFormData] = useState<{
    name: string;
    lastname:string;
    email: string;
    Telnumber: string;
    eventDate: string;
    numberOfPeople: string,
    eventAdress: string;
    arrivalTime: string[];
    subject: string;
    message: string;
    eventServices: string[]; // Här specificeras att det är en array av strängar
  }>({
    name: "",
    lastname:"",
    email: "",
    Telnumber: "",
    eventDate: "",
    numberOfPeople: "",
    eventAdress: "",
    arrivalTime: [],
    subject: "",
    message: "",
    eventServices: [], // Tom array från början
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
  
    // Kontrollera om formData[name] är en array innan vi använder filter
    setFormData((prevState) => {
      if (name === "arrivalTime" || name === "eventServices") {
        const currentValues = prevState[name as keyof typeof prevState];
  
        if (Array.isArray(currentValues)) {
          // Om det är en array, lägg till eller ta bort värdet
          return {
            ...prevState,
            [name]: checked
              ? [...currentValues, value] // Lägg till om den är ikryssad
              : currentValues.filter((item) => item !== value), // Ta bort om den inte är ikryssad
          };
        }
        
        // Om det inte är en array, skapa en ny array
        return {
          ...prevState,
          [name]: checked ? [value] : [], // Om ikryssad, skapa en array med värdet, annars tom
        };
      }
  
      return prevState;
    });
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
          lastname: formData.lastname,
          email: formData.email,
          Telnumber: formData.Telnumber,
          eventDate: formData.eventDate,
          numberOfPeople: formData.numberOfPeople,
          eventAdress: formData.eventAdress,
          message: formData.message,
          eventServices: formData.eventServices.join(", "),
          arrivalTime: formData.arrivalTime.join(", "), 
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

      <div>
      <h1><strong>Boka Catering</strong></h1>
      </div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Namn*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Förnamn.."
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Efternamn*</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Efternamn.."
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventAdress">Adress</label>
        <input
          type="text"
          id="eventAdress"
          name="eventAdress"
          value={formData.eventAdress}
          onChange={handleChange}
          required
        />

        <label htmlFor="Telnumber">Telefonnummer*</label>
        <input
          type="text"
          id="Telnumber"
          name="Telnumber"
          value={formData.Telnumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        

        <label htmlFor="eventDate">Vilket datum?</label>
        <input
          type="text"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
      
        <label>Eventtjänster</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>
            <input
              type="checkbox"
              name="eventServices"
              value="Foodtruck Catering"
              checked={formData.eventServices.includes("Foodtruck Catering")}
              onChange={handleCheckboxChange}
            />
            Foodtruck Catering
          </label>
          
          <label>
            <input
              type="checkbox"
              name="eventServices"
              value="Catering"
              checked={formData.eventServices.includes("Catering")}
              onChange={handleCheckboxChange}
            />
            Catering
          </label>
        </div>

        <label>Vilken tid ska vi komma?</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>
            <input
              type="checkbox"
              id="lunch"
              name="arrivalTime"
              value="Lunch"
              checked={formData.arrivalTime.includes("Lunch")}
              onChange={handleCheckboxChange}
            />
            Lunch
          </label>

          <label>
            <input
              type="checkbox"
              id="time1700"
              name="arrivalTime"
              value="17.00"
              checked={formData.arrivalTime.includes("17.00")}
              onChange={handleCheckboxChange}
            />
            17.00
          </label>

          <label>
            <input
              type="checkbox"
              id="time1900"
              name="arrivalTime"
              value="19.00"
              checked={formData.arrivalTime.includes("19.00")}
              onChange={handleCheckboxChange}
            />
            19.00
          </label>

          <label>
            <input
              type="checkbox"
              id="later"
              name="arrivalTime"
              value="Senare"
              checked={formData.arrivalTime.includes("Senare")}
              onChange={handleCheckboxChange}
            />
            Senare
          </label>
        </div>

        {/* <label htmlFor="subject">Ämne:</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="support">Support</option>
          <option value="sales">Försäljning</option>
          <option value="general">Allmän fråga</option>
        </select> */}

        <label htmlFor="eventAdress">Hur många är ni(typ)?</label>
        <input
          type="text"
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Kommentar/Övriga önskemål</label>
        <textarea
          id="message"
          name="message"
          placeholder="Meddelande..."
          value={formData.message}
          onChange={handleChange}
          rows={10}
          required
        ></textarea>

        <button type="submit">Skicka</button>
      </form>

      <footer>
        Någon gata 123, Stockholm, 128 46. Telefon <a href="tel:+4612345678">+46 123 456 78</a>
      </footer>
    </div>
  );
}

