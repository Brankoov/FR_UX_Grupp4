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
    //arrivalTime: string[];
    subject: string;
    message: string;
    bookingType: string;
    //eventServices: string[]; // Här specificeras att det är en array av strängar
  }>({
    name: "",
    lastname:"",
    email: "",
    Telnumber: "",
    eventDate: "",
    numberOfPeople: "",
    eventAdress: "",
    //arrivalTime: [],
    subject: "",
    message: "",
    bookingType: "",
    //eventServices: [], // Tom array från början
  });

  const [errors, setErrors] = useState<any>({});

  const [gdprAccepted, setGdprAccepted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "date" ? value : value, // Hanterar datum korrekt
    }));
  };
  {/* CHECKBOX HANTERING
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
  
    setFormData((prevState) => {
      if (name === "arrivalTime" || name === "eventServices") {
        const currentValues = prevState[name as keyof typeof prevState];
  
        if (Array.isArray(currentValues)) {
          return {
            ...prevState,
            [name]: checked
              ? [...currentValues, value]
              : currentValues.filter((item) => item !== value),
          };
        }
        
        return {
          ...prevState,
          [name]: checked ? [value] : [],
        };
      }
  
      return prevState;
    });
  }; */}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Formdata:", formData);

    const validationErrors: { [key: string]: string } = {};

    if (!formData.email.includes('@')) {
      validationErrors.email = 'E-post måste innehålla ett @';
    }

    if (!/^\d{10}$/.test(formData.Telnumber)) {
      validationErrors.Telnumber = 'Telefonnummer måste vara 10 siffror';
      alert("Telefonnummer måster vara 10 siffror")
    }

    if (!gdprAccepted) {
      alert("Du måste godkänna GDPR-villkoren för att skicka formuläret.");
      return;
    }

    {/*if (!/^\d{2}\/\d{2}\/\d{2,4}$/.test(formData.eventDate)) {
      validationErrors.eventDate = 'Datumet måste vara i formatet dd/mm/åå eller dd/mm/åååå';
      alert("Datumet måste vara i formatet dd/mm/åå eller dd/mm/åååå")
    } */}

    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation errors:", validationErrors);
      setErrors(validationErrors);  
      return;
    }

    emailjs
      .send(
        "service_o4bfd5q",
        "template_gl302kp",
        {
          name: formData.name,
          lastname: formData.lastname,
          email: formData.email,
          Telnumber: formData.Telnumber,
          eventDate: formData.eventDate,
          numberOfPeople: formData.numberOfPeople,
          eventAdress: formData.eventAdress,
          message: formData.message,
          bookingType: formData.bookingType,
          //eventServices: formData.eventServices.join(", "),
          //arrivalTime: formData.arrivalTime.join(", "), 
        },
        "hCsWUw6D_HV6MX5JI"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          alert("Formuläret skickades!");
        },
        (error) => {
          console.log("Error sending email:", error);
          alert("Något gick fel. Försök igen senare.");
        }
      );
  };


  return (
    <div>
      <Header />
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* Höger sektion */}
          <div className="form-container">
            
            <div className="form-grid">
              <h1 className="form-title"><strong>Bokningsförfrågan</strong></h1>
              <h1><strong></strong></h1>
              <div className="form-group">
                <label htmlFor="bookingType">Vad vill du boka?</label>
                <select
                  id="bookingType"
                  name="bookingType"
                  value={formData.bookingType}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Välj ett alternativ --</option>
                  <option value="Foodtruck">Foodtruck</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Catering Italiensk Buffé">Catering Italiensk Buffé</option>
                  <option value="Catering Grekisk Buffé">Catering Grekisk Buffé</option>
                  <option value="Catering Asiatisk Buffé">Catering Asiatisk Buffé</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Förnamn*</label>
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
                <label htmlFor="eventAdress">Event adress</label>
                <input type="text" id="eventAdress" name="eventAdress" value={formData.eventAdress} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPeople">Hur många är ni (typ)?</label>
                <input type="text" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Vilket datum?*</label>
                <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
              </div>
              {/* CHECKBOXAR
              <div className="form-group">
                <label className="checkbox-title">Eventtjänster</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" name="eventServices" value="Foodtruck Catering" checked={formData.eventServices.includes("Foodtruck Catering")} onChange={handleCheckboxChange} /> Foodtruck</label>
                  <label><input type="checkbox" name="eventServices" value="Catering" checked={formData.eventServices.includes("Catering")} onChange={handleCheckboxChange} /> Catering</label>
                </div>
              </div>
              
              <div className="form-group">
                <label className="checkbox-title">Vilken tid ska vi komma?</label> 
                  
                <div className="checkbox-group">
                  <label><input type="checkbox" name="arrivalTime" value="Lunch" checked={formData.arrivalTime.includes("Lunch")} onChange={handleCheckboxChange} /> Lunch</label>
                  <label><input type="checkbox" name="arrivalTime" value="17.00" checked={formData.arrivalTime.includes("17.00")} onChange={handleCheckboxChange} /> 17.00</label>
                  <label><input type="checkbox" name="arrivalTime" value="19.00" checked={formData.arrivalTime.includes("19.00")} onChange={handleCheckboxChange} /> 19.00</label>
                  <label><input type="checkbox" name="arrivalTime" value="Senare" checked={formData.arrivalTime.includes("Senare")} onChange={handleCheckboxChange} /> Senare</label>
                </div>
              </div>*/}
              <div className="form-group">
                <label htmlFor="message">Kommentar/Övriga önskemål</label>
                <textarea id="message" name="message" value={formData.message} placeholder="Har du allergen/allergener eller specifika önskemål angående bokningen eller maten fyll i det här!" onChange={handleChange} rows={5}></textarea>
              </div>
              {/*GDPR checkbox*/}
              <div className="form-group gdpr-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={gdprAccepted}
                    onChange={(e) => setGdprAccepted(e.target.checked)}
                  />
                  Jag godkänner <a href="https://www.imy.se/verksamhet/dataskydd/" target="_blank" rel="noopener noreferrer">villkoren enligt GDPR</a>.
                </label>
              </div>
              {/* Knapp-container */}
            <div className="button-container">
              <button type="submit">Skicka</button>
            </div>
            </div>
            
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
          </div>
        </form>
      </div>
      <Footer />
    </div>   
    
  );
}



