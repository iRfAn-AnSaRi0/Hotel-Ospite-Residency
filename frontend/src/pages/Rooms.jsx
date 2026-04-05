import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileBottomBar from "../components/layout/MobileBottomBar";
import RoomList from "../sections/rooms/RoomList";

const Rooms = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar fixed />
      <RoomList />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Rooms;

