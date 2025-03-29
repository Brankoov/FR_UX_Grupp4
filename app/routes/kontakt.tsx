import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "src/components/Header"
import Footer from "~/components/Footer";


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

  const [errors, setErrors] = useState<any>({});

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
    console.log("Form submitted!");
    console.log("Formdata:", formData)

     // Skapa ett objekt för att hålla valideringsfel
  const validationErrors: any = {};

   // E-post validering
   if (!formData.email.includes('@')) {
    validationErrors.email = 'E-post måste innehålla ett @';
  }

  // Telefonnummer validering (bara siffror och rätt längd)
  if (!/^\d{10}$/.test(formData.Telnumber)) {
    validationErrors.Telnumber = 'Telefonnummer måste vara 10 siffror';
    alert("Telefonnummer måster vara 10 siffror")
  }

  // Datumvalidering (dd/mm/åå) (dd/mm/åååå)
  if (!/^\d{2}\/\d{2}\/\d{2,4}$/.test(formData.eventDate)) {
    validationErrors.eventDate = 'Datumet måste vara i formatet dd/mm/åå eller dd/mm/åååå';
    alert("Datumet måste vara i formatet dd/mm/åå eller dd/mm/åååå")
  }

  // Om det finns några fel, visa felmeddelanden och avbryt formulärskickningen
  if (Object.keys(validationErrors).length > 0) {
    console.log("Validation errors:", validationErrors);
    setErrors(validationErrors);  
    return;
  }

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
          console.log("Email sent successfully:", result); // Logga resultatet om mailet skickades
          alert("Formuläret skickades!");
        },
        (error) => {
          console.log("Error sending email:", error); // Logga felmeddelandet här
          alert("Något gick fel. Försök igen senare.");
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Vänster sektion */}
          <div className="form-left">
            <div className="info-box">
              <p>Upptäck en värld av passion och tradition – två unika smakupplevelser!</p>
              <p>Med en kärlek till både det genuina italienska köket och de djupa smakerna 
                från Sveriges rika natur erbjuder jag två distinkta matkoncept – vid olika
                 tillfällen, men alltid med samma passion.</p>
              <p>Oavsett vilket koncept du möts av, kan du räkna med en måltid lagad med omsorg och hjärta.</p>
            </div>
            <img src="/images/formulärbild2.png" alt="Foodtruck" className="info-image" />
          </div>

          {/* Höger sektion */}
          <div className="form-container">
            <h1 className="form-title"><strong>Bokningsförfrågan</strong></h1>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Namn*</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Efternamn*</label>
                <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Telnumber">Telefonnummer*</label>
                <input type="text" id="Telnumber" name="Telnumber" value={formData.Telnumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-post*</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="eventAdress">Adress</label>
                <input type="text" id="eventAdress" name="eventAdress" value={formData.eventAdress} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPeople">Hur många är ni (typ)?</label>
                <input type="text" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Vilket datum?*</label>
                <input type="text" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Eventtjänster</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" name="eventServices" value="Foodtruck Catering" checked={formData.eventServices.includes("Foodtruck Catering")} onChange={handleCheckboxChange} /> Foodtruck</label>
                  <label><input type="checkbox" name="eventServices" value="Catering" checked={formData.eventServices.includes("Catering")} onChange={handleCheckboxChange} /> Catering</label>
                </div>
              </div>
              <div className="form-group">
                <label>Vilken tid ska vi komma?</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" name="arrivalTime" value="Lunch" checked={formData.arrivalTime.includes("Lunch")} onChange={handleCheckboxChange} /> Lunch</label>
                  <label><input type="checkbox" name="arrivalTime" value="17.00" checked={formData.arrivalTime.includes("17.00")} onChange={handleCheckboxChange} /> 17.00</label>
                  <label><input type="checkbox" name="arrivalTime" value="19.00" checked={formData.arrivalTime.includes("19.00")} onChange={handleCheckboxChange} /> 19.00</label>
                  <label><input type="checkbox" name="arrivalTime" value="Senare" checked={formData.arrivalTime.includes("Senare")} onChange={handleCheckboxChange} /> Senare</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Kommentar/Övriga önskemål</label>
                <textarea id="message" name="message" value={formData.message} placeholder="Har du allergen/allergener eller specifika önskemål angående bokningen eller maten fyll i det här!" onChange={handleChange} rows={5}></textarea>
              </div>
            </div>
            {/* Knapp-container */}
            <div className="button-container">
              <button type="submit">Skicka</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>   
    
  );
}



