import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomBar from "../components/layout/MobileBottomBar";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container">
      <Navbar />
      <Hero />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Home;

