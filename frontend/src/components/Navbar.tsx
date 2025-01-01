import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MobileNavbar = () => (
    <div className="flex flex-row justify-between items-center lg:xy-p mxy-p">
      <img src="./svgs/logo.svg" alt="Logo" className="h-[30px]" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-6 h-6 fill-grayishviolet"
        onClick={toggleMenu} // Toggle menu when clicked
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-3/4 rounded-lg p-6 space-y-6">
            {/* Navigation Links */}
            <button className="w-full text-center py-2 text-grayishviolet hover:font-bold">
              Features
            </button>
            <button className="w-full text-center py-2 text-grayishviolet hover:font-bold">
              Pricing
            </button>
            <button className="w-full text-center py-2 text-grayishviolet hover:font-bold">
              Resources
            </button>
            <button className="w-full text-center py-2 text-grayishviolet hover:font-bold">
              Login
            </button>
            <button className="w-full text-center py-2 text-white bg-cyan hover:bg-opacity-50 rounded-full">
              Sign Up
            </button>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-grayishviolet text-xl font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const DesktopNavbar = () => (
    <nav className="flex flex-row justify-between items-center lg:xy-p mxy-p">
      <div className="flex flex-row items-center text-grayishviolet text-sm font-semibold gap-x-9">
        <img src="./svgs/logo.svg" alt="Logo" className="h-[26px]" />
        <button className="hover:font-bold">Features</button>
        <button className="hover:font-bold">Pricing</button>
        <button className="hover:font-bold">Resources</button>
      </div>

      <div className="flex flex-row text-sm font-semibold gap-x-9">
        <button className="text-grayishviolet hover:font-bold">Login</button>
        <button className="py-1.5 px-4 text-white bg-cyan hover:bg-opacity-50 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default Navbar;
