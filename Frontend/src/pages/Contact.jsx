import React from "react";
import ContactSection from "../components/UI/ContactSection";
import Navbar from "../components/Layouts/Navbar";
import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
