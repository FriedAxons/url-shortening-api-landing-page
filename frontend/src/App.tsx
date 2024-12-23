import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenURL from "./components/ShortenURL";

const App = () => {
  return (
    <div className="w-full h-screen lg:x-p mx-p">
      <Navbar />
      <HeroSection />
      <ShortenURL />
    </div>
  );
};

export default App;
