import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "src/components/Header"
import Footer from "~/components/Footer";
import BookingForm from "~/components/BookingForm";


export default function Kontakt() {
  return(
    <>
    <Header />
    <div className="page-background">
    <BookingForm />
    </div>
    <Footer />
  </>
  )
}



