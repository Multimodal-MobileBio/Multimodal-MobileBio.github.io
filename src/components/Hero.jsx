const Hero = () => {
  return (
    <div className=" h-[calc(100vh-64px)] bg-cover p-10 text-text">
      <p className="mb-16 mt-32 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text px-32 text-center text-4xl font-semibold text-transparent lg:text-6xl">
        A Paradigm Shift in the Field of Biometric Authentication
      </p>
      <p className="mb-28 mt-0 text-center text-xl text-slate-700 lg:px-72">
        Introducing Federated Authentication on Mobile Devices with Multiple
        Biometric Modalities
      </p>
      <div className="mt-8 flex flex-row justify-center">
        <a
          href="#overview"
          className="border-b border-slate-500 px-4 py-2 text-center"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Hero;
