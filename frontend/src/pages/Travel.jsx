import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomBar from "../components/layout/MobileBottomBar";
import TravelInfo from "../sections/travel/TravelInfo";

const Travel = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <TravelInfo />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Travel;

