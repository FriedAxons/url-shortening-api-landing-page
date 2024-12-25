import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenURL from "./components/ShortenURL";
import InfoSection from "./components/InfoSection";
import GetStarted from "./components/GetStarted";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HeroSection />
      <ShortenURL />
      <InfoSection />
      <GetStarted />
    </div>
  );
};

export default App;
