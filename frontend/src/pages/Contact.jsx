import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomBar from "../components/layout/MobileBottomBar";
import ContactForm from "../sections/contact/ContactForm";

const Contact = () => {
  return (
    <div className="bg-surface text-on-surface">
      <Navbar />
      <ContactForm />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Contact;

