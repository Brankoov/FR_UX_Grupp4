import { useState } from "react";
import emailjs from "emailjs-com";
import { type bookingFormData } from "data/bookingFormData"
import styles from "./BookingForm.module.css";

const BookingForm = () => {
    const [formData, setFormData] = useState<bookingFormData>({
        name: "",
        lastname: "",
        email: "",
        Telnumber: "",
        eventDate: "",
        numberOfPeople: "",
        eventAdress: "",
        serveTime: "",
        subject: "",
        message: "",
        bookingType: "",
        cateringType: "",
    });

  const [errors, setErrors] = useState({});

  const [gdprAccepted, setGdprAccepted] = useState<boolean>(false);

  const [gdprError, setGdprError] = useState<boolean>(false);

  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

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
      setGdprError(true)
      return;
    }

    setGdprError(false)

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
          serveTime: formData.serveTime,
          bookingType: formData.bookingType,
          cateringType: formData.cateringType,
          //eventServices: formData.eventServices.join(", "),
          //arrivalTime: formData.arrivalTime.join(", "), 
        },
        "hCsWUw6D_HV6MX5JI"
      )
      .then(
        (result: any) => {
          console.log("Email sent successfully:", result);
          
          setShowConfirmation(true); // Visa popup
          setTimeout(() => setShowConfirmation(false), 5000); // Dölj efter 5 sekunder
        },
        
        (error: any) => {
          console.log("Error sending email:", error);
          alert("Något gick fel. Försök igen senare.");
        }
      );
  };

  return (
    <div className={styles['contact-wrapper']}>
     <h2 className={styles['intro-titel']}>Bokningsförfrågan</h2>
      <div className={styles['form-section']}>
        
         <div className={styles['intro-section']}>
          <div className={styles['intro-text']}>
            
            <p>
            Vill du boka vår foodtruck till ditt event, bröllop, företagsfest eller kanske bara en riktigt 
            god stund tillsammans? 
            Vi älskar att skapa matupplevelser där passion, tradition och glädje möts!
            Fyll i dina uppgifter så kommer det snart en bekräftelse och mer info. Ju mer du berättar om dina önskemål, 
            desto bättre kan vi anpassa upplevelsen – allt från meny till tider och eventuella allergier.
            Vi ser fram emot att höra från dig!
            </p>
            <p>
              Oavsett vilket koncept du möts av, kan du räkna med en måltid lagad med omsorg och hjärta.
            </p>
          </div>
          <img src="/images/formulärbild2.png" alt="Foodtruck" className={styles['form-image']} />
        </div>

        <form className={styles['form-clean']} onSubmit={handleSubmit}>
        <div className={styles['form-group-row']}>
        <div className={styles['form-group']}>
            <label>Vad vill du boka?</label>
            <select name="bookingType" value={formData.bookingType} onChange={handleChange}>
              <option value="">Välj alternativ</option>
              <option value="Foodtruck">Foodtruck</option>
              <option value="Lunch">Lunch</option>
              <option value="Catering">Catering</option>
            </select>
          </div>
          <div></div>

          {formData.bookingType === "Catering" && (
            <div className={styles['form-group']}>
              <label>Välj buffétyp</label>
              <select name="cateringType" value={formData.cateringType} onChange={handleChange}>
                <option value="">Välj buffé</option>
                <option value="Italiensk buffé">Italiensk buffé</option>
                <option value="Grekisk buffé">Grekisk buffé</option>
                <option value="Asiatisk buffé">Asiatisk buffé</option>
              </select>
            </div>
          )}
          </div>
             <div className={styles['form-group']}>
                 <label htmlFor="eventAdress">Eventadress</label>
                 <input type="text" id="eventAdress" name="eventAdress" value={formData.eventAdress} onChange={handleChange} />
                </div>
                <div className={styles['form-group']}>
                 <label htmlFor="numberOfPeople">Hur många är ni?</label>
                 <input type="text" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
                </div>
                <div className={styles['form-group']}>
                 <label htmlFor="serveTime">När ska maten serveras?</label>
                 <input type="text" id="serveTime" name="serveTime" value={formData.serveTime} onChange={handleChange} />
                 <small className={styles['field-text']}>
                    Vi är alltid på plats 30 min innan och sätter upp.
                </small>
                </div>
                <div className={styles['form-group']}>
                 <label htmlFor="eventDate">Vilket datum?*</label>
                 <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
             </div>
             <div className={`${styles['form-group']} ${styles['form-group-full']}`}></div>
             <div className={`${styles['form-group']} ${styles['form-group-full']}`}></div>
          <div className={styles['form-group']}>
            <label>Förnamn*</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Efternamn*</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Telefonnummer*</label>
            <input type="text" name="Telnumber" value={formData.Telnumber} onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>E-post*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          

          <div className={`${styles['form-group']} ${styles['form-group-full']}`}>
            <label>Kommentar</label>
            <textarea name="message" value={formData.message} placeholder="Skriv önskemål/eventuella allergener..." onChange={handleChange} rows={5}></textarea>
          </div>

          <div className={styles['checkbox-row']}>
            <label>
              <input type="checkbox" checked={gdprAccepted} onChange={(e) => setGdprAccepted(e.target.checked)} />
              Jag godkänner <a href="https://www.imy.se/verksamhet/dataskydd/" target="_blank" rel="noopener noreferrer">GDPR-villkoren</a>.
            </label>
          </div>
          
          <button type="submit">Skicka</button>
          {gdprError && (
            <div className={styles['gdpr-error']}>
                Du måste godkänna integritetspolicyn för att kunna skicka formuläret.
            </div>
            )}
        </form>
         {showConfirmation && (
        <div className={styles['confirmation-popup']}>
          <p>Tack för din bokning!<br />Vi återkopplar till dig snarast.</p>
        </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;