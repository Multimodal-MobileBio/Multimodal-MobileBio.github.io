import videobg from "../assets/hero.mp4";
import PropTypes from "prop-types";

const Hero = ({ backgroundRef }) => {
  return (
    <div>
      <div className="absolute z-40 h-[calc(100vh-64px)] p-10">
        <p className="mb-16 mt-44 bg-gradient-to-r from-emerald-600 to-emerald-900 bg-clip-text px-8 text-center text-3xl font-semibold text-transparent sm:px-16 sm:text-5xl md:px-32 lg:text-6xl">
          A Paradigm Shift in the Field of Biometric Authentication
        </p>
        <p className="mb-28 mt-0 text-center text-base text-text-100 sm:text-xl lg:px-72">
          Federated Authentication on Mobile Devices with Multiple Biometric
          Modalities
        </p>
        <div className="mt-8 flex flex-row justify-center">
          <span
            className="absolute top-3/4 h-8 w-8 rotate-45 transform animate-arrow-down cursor-pointer border-b-2 border-l-2 border-slate-900"
            onClick={() => {
              backgroundRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          ></span>
        </div>
      </div>
      <video
        src={videobg}
        autoPlay
        loop
        muted
        className="z-10 -mt-16 h-screen w-full object-cover opacity-30"
      />
    </div>
  );
};

Hero.propTypes = {
  backgroundRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Hero;
