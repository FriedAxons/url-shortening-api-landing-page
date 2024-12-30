import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenURL from "./components/ShortenURL";
import InfoSection from "./components/InfoSection";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <ShortenURL />
      <InfoSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
