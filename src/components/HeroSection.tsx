const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="w-[81%] leading-[70px] text-6xl font-bold text-verydarkviolet">
          More than just shorter links
        </h1>
        <p className="w-[50%] text-gray font-medium">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <img
        src="/url-shortening-api-landing-page/icons/illustration-working.svg"
        alt="Working Illustration"
        className="w-[35%]"
      />
    </div>
  );
};

export default HeroSection;
