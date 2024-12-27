import { useIsMobile } from "../hooks/useIsMobile";

const InfoSection = () => {
  const isMobile = useIsMobile();

  const MobileInfoSection = () => (
    <div className="lg:xy-p mxy-p">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-verydarkviolet mb-5">
          Advanced Statistics
        </h1>
        <p className="text-grayishviolet font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center text-center">
          <img
            src="./svgs/icon-brand-recognition.svg"
            alt="Brand Recognition Illustration"
          />
          <h2 className="text-xl font-bold text-verydarkviolet mb-5">
            Brand Recognition
          </h2>
          <p className="text-grayishviolet font-medium">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="./svgs/icon-detailed-records.svg"
            alt="Detailed Records Illustration"
          />
          <h2 className="text-xl font-bold text-verydarkviolet mb-5">
            Detailed Records
          </h2>
          <p className="text-grayishviolet font-medium">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="./svgs/icon-fully-customizable.svg"
            alt="Fully Customizable Illustration"
          />
          <h2 className="text-xl font-bold text-verydarkviolet mb-5">
            Fully Customizable
          </h2>
          <p className="text-grayishviolet font-medium">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );

  const DesktopInfoSection = () => (
    <div className="lg:xy-p mxy-p">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-verydarkviolet mb-4">
          Advanced Statistics
        </h1>
        <p className="w-[29%] leading-7  text-center text-grayishviolet font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="relative flex flex-row justify-center">
        <div className="max-h-[320px] w-[380px] bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center items-center bg-darkviolet w-20 h-20 mb-8 rounded-full">
            <img
              src="./svgs/icon-brand-recognition.svg"
              alt="Brand Recognition Illustration"
            />
          </div>
          <h2 className="text-verydarkviolet text-xl font-bold mb-4">
            Brand Recognition
          </h2>
          <p className="text-grayishviolet">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>

        {/* Cyan Bar */}
        <div className="w-16 h-2 bg-cyan self-center transform translate-y-12"></div>

        <div className="max-h-[320px] w-[380px] bg-white p-6 rounded-lg shadow-lg mt-12">
          <div className="flex justify-center items-center bg-darkviolet w-20 h-20 mb-8 rounded-full">
            <img
              src="./svgs/icon-detailed-records.svg"
              alt="Brand Recognition Illustration"
            />
          </div>
          <h2 className="text-verydarkviolet text-xl font-bold mb-4">
            Detailed Records
          </h2>
          <p className="text-grayishviolet">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Cyan Bar */}
        <div className="w-16 h-2 bg-cyan self-center transform translate-y-12"></div>

        <div className="max-h-[320px] w-[380px] bg-white p-6 rounded-lg shadow-lg mt-24">
          <div className="flex justify-center items-center bg-darkviolet w-20 h-20 mb-8 rounded-full">
            <img
              src="./svgs/icon-fully-customizable.svg"
              alt="Brand Recognition Illustration"
            />
          </div>
          <h2 className="text-verydarkviolet text-xl font-bold mb-4">
            Fully Customizable
          </h2>
          <p className="text-grayishviolet">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );

  return <>{isMobile ? <MobileInfoSection /> : <DesktopInfoSection />}</>;
};

export default InfoSection;