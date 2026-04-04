import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRouts from "./routes/AppRouts";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouts />
    </BrowserRouter>
  );
}

export default App;
