import { useIsMobile } from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  // const MobileNavbar = () => {}

  // const DesktopNavbar = () => {}

  return (
    <nav className="">{isMobile ? <MobileHeader /> : <DesktopHeader />}</nav>
  );
};

export default Navbar;
