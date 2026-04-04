import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomBar from "../components/layout/MobileBottomBar";
import AboutContent from "../sections/about/AboutContent";

const About = () => {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <Navbar fixed />
      <AboutContent />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default About;

