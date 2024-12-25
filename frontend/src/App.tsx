import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenURL from "./components/ShortenURL";
import InfoSection from "./components/InfoSection";

const App = () => {
  return (
    <div className="w-full h-screen lg:x-p mx-p">
      <Navbar />
      <HeroSection />
      <ShortenURL />
      <InfoSection />
    </div>
  );
};

export default App;
