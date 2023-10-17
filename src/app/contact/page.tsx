import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/navbar/NavBar";
import ContactForm from "../components/contactForm/contactForm";
import Footer from "../components/footer/Footer";
import './contact.css';

export default function Page() {
      return (
        <div>
          <NavBar />
          <HeroSection Heading="Contact Us" Descriptive_Text="We are just one click away" />
          <div className="contactformdiv">
            <ContactForm />
          </div>
          <Footer />
        </div>
      );
    }