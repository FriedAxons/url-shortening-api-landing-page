import { useIsMobile } from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  const MobileNavbar = () => (
    <div className="flex flex-row justify-between items-center mx-p">
      <img
        src="/url-shortening-api-landing-page/icons/logo.svg"
        alt="Logo"
        className="h-[28px]"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-6 h-6 fill-grayishviolet"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
    </div>
  );

  const DesktopNavbar = () => (
    <div className="flex flex-row justify-between items-center x-p">
      <div className="flex flex-row items-center text-grayishviolet text-sm font-semibold gap-x-8">
        <img
          src="/url-shortening-api-landing-page/icons/logo.svg"
          alt="Logo"
          className="h-[28px]"
        />
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>

      <div className="flex flex-row text-sm font-semibold gap-x-8">
        <button className="text-grayishviolet">Login</button>
        <button className="py-1 px-3 text-white bg-cyan rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );

  return (
    <nav className="">{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</nav>
  );
};

export default Navbar;
