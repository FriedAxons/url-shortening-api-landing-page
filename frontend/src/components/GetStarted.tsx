const GetStarted = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/svgs/bg-boost-desktop.svg')] bg-cover bg-no-repeat bg-darkviolet lg:py-14 py-24 gap-y-5">
      <h1 className="lg:text-4xl text-2xl text-white font-bold">
        Boost your links today
      </h1>
      <button className="lg:py-2.5 py-3 lg:px-7 px-11 text-white font-semibold bg-cyan hover:bg-opacity-50 rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
