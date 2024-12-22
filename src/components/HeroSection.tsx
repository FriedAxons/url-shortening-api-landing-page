import { useIsMobile } from "../hooks/useIsMobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const DesktopHeroSection = () => (
    <div className="flex flex-row justify-between items-center lg:pt-10 xl:pt-0">
      <div className="w-1/2">
        <h1 className="w-full lg:leading-[80px] xl:leading-[110px] lg:text-7xl xl:text-8xl font-bold text-verydarkviolet">
          More than just shorter links
        </h1>
        <p className="pr-40 lg:text-lg xl:text-xl text-gray font-medium">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="py-2 px-7 mt-5 text-white bg-cyan hover:bg-opacity-50 rounded-full">
          Get Started
        </button>
      </div>
      <img
        src="/url-shortening-api-landing-page/icons/illustration-working.svg"
        alt="Working Illustration"
        className="w-1/2"
      />
    </div>
  );

  const MobileHeroSection = () => (
    <div className="relative flex flex-col justify-center items-center">
      <img
        src="/url-shortening-api-landing-page/icons/illustration-working.svg"
        alt="Working Illustration"
        className="absolute top-0 left-[50px] mt-5"
      />
      <div className="flex flex-col">
        <h1 className="mt-[260px] text-4xl text-center font-extrabold text-verydarkviolet">
          More than just shorter links
        </h1>
        <p className="mt-2 text-lg text-center text-gray font-medium">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="py-4 mt-5 text-white text-lg font-semibold bg-cyan hover:bg-opacity-50 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );

  return <>{isMobile ? <MobileHeroSection /> : <DesktopHeroSection />}</>;
};

export default HeroSection;
