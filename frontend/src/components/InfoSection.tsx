import { useIsMobile } from "../hooks/useIsMobile";

const InfoSection = () => {
  const isMobile = useIsMobile();

  const MobileInfoSection = () => (
    <div>
      <div className="flex flex-col items-center">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col">
        <div>
          <img
            src="./svgs/icon-brand-recognition.svg"
            alt="Brand Recognition Illustration"
          />
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div>
          <img
            src="./svgs/icon-detailed-records.svg"
            alt="Detailed Records Illustration"
          />
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <img
            src="./svgs/icon-fully-customizable.svg"
            alt="Fully Customizable Illustration"
          />
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );

  const DesktopInfoSection = () => (
    <div className="mt-36">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-verydarkviolet">
          Advanced Statistics
        </h1>
        <p className="text-grayishviolet font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-row">
        <div>
          <img
            src="./svgs/icon-brand-recognition.svg"
            alt="Brand Recognition Illustration"
          />
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div>
          <img
            src="./svgs/icon-detailed-records.svg"
            alt="Detailed Records Illustration"
          />
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <img
            src="./svgs/icon-fully-customizable.svg"
            alt="Fully Customizable Illustration"
          />
          <h2>Fully Customizable</h2>
          <p>
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
