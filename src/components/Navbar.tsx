import { useIsMobile } from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  const MobileNavbar = () => (
    <div className="flex flex-row justify-between items-center">
      <img src="/url-shortening-api-landing-page/icons/logo.svg" alt="Logo" />
      <img
        src="/url-shortening-api-landing-page/icons/bars-solid.svg"
        alt="Navigation Bars"
      />
    </div>
  );

  const DesktopNavbar = () => (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <img src="/url-shortening-api-landing-page/icons/logo.svg" alt="Logo" />
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>

      <div className="">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );

  return (
    <nav className="">{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</nav>
  );
};

export default Navbar;
