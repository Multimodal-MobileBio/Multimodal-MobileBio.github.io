import methodology from "../assets/methodology.png";
import federated from "../assets/federated.png";
import broader_impacts from "../assets/broader_impacts.jpeg";
import PropTypes from "prop-types";

const Overview = ({ sectionRef }) => {
  return (
    <div
      className="min-h-screen px-8 pt-12 sm:px-20 lg:px-36"
      id="overview"
      ref={sectionRef}
    >
      {/* Methodology */}
      <div className="flex flex-row pb-8 pt-12">
        <div className="mr-4 hidden w-1/2 transform items-center justify-center transition duration-300 hover:scale-105 lg:flex">
          <img
            src={methodology}
            alt="methodology"
            className="rounded-xl border-2 border-primary-300 shadow-xl"
          />
        </div>
        <div className="pl-4 lg:w-1/2">
          <h4 className="mb-2 text-2xl font-medium">Methodology</h4>
          <div className="mx-14 my-4 block transform items-center justify-center transition duration-300 hover:scale-105 lg:hidden">
            <img
              src={methodology}
              alt="methodology"
              className="rounded-xl border-2 border-primary-300 shadow-xl"
            />
          </div>

          <p className="text-sm italic text-text-200 lg:text-base">
            Federated-Auth project adopts a comprehensive framework centered on
            enhancing mobile-based biometric authentication. Our design
            incorporates a multifaceted approach that leverages various
            biometric modalities, including facial features, fingerprint
            characteristics, iris features, voice patterns, physiological
            signals, and behavioral traits. The methodology revolves around the
            seamless integration of these modalities, extracting unique data
            from mobile device sensors like cameras and inertial sensors,
            delivering a cost-effective and sustainable solution. Our innovative
            approach introduces the concept of federated learning, a
            privacy-preserving technique that enables collaborative training
            across mobile devices without exposing sensitive biometric data to a
            central server. This novel aspect of our methodology ensures
            individual privacy protection while improving authentication
            accuracy.
          </p>
        </div>
      </div>

      {/* Federated */}
      <div className="flex flex-row pb-8 pt-12">
        <div className="pr-4 lg:w-1/2">
          <h4 className="mb-2 text-2xl font-medium">Federated Learning</h4>
          <div className="mx-14 my-4 block transform items-center justify-center transition duration-300 hover:scale-105 lg:hidden">
            <img
              src={federated}
              alt="federated"
              className="rounded-xl border-2 border-primary-300 shadow-xl"
            />
          </div>
          <p className="text-sm italic text-text-200 lg:text-base">
            Leveraging the federated learning approach, we aim to train a local
            model for user authentication directly on the mobile device without
            sharing the local data with the server. Instead, each local client
            will share the authentication token that it has learned for
            classification purposes to the central server, and the server will
            use the token collected from each client to train a global user
            classification model. This global model can be used as a
            discriminative model, assisting each local client to train a better
            authentication model against unauthorized access.
          </p>
        </div>
        <div className="ml-4 hidden w-1/2 transform items-center justify-center transition duration-300 hover:scale-105 lg:flex">
          <img
            src={federated}
            alt="federated"
            className="rounded-xl border-2 border-primary-300 shadow-xl"
          />
        </div>
      </div>

      {/* Broader Impacts */}
      <div className="flex flex-row pb-8 pt-12">
        <div className="mr-4 hidden w-1/2 transform items-center justify-center transition duration-300 hover:scale-105 lg:flex">
          <img
            src={broader_impacts}
            alt="broader_impacts"
            className="rounded-xl border-2 border-primary-300 shadow-xl"
          />
        </div>
        <div className="pl-4 lg:w-1/2">
          <h4 className="mb-2 text-2xl font-medium">Broader Impacts</h4>
          <div className="mx-14 my-4 block transform items-center justify-center transition duration-300 hover:scale-105 lg:hidden">
            <img
              src={broader_impacts}
              alt="broader_impacts"
              className="rounded-xl border-2 border-primary-300 shadow-xl"
            />
          </div>

          <p className="text-sm italic text-text-200 lg:text-base">
            Federated-Auth extends its broader impacts beyond the realm of
            biometric authentication. By reducing the need for additional
            hardware and utilizing existing mobile device sensors, it aligns
            seamlessly with sustainability goals, curbing electronic waste and
            minimizing the energy footprint. Furthermore, Federated-Auth fosters
            knowledge exchange and collaboration, bridging the gap between
            academia and industry, and contributing to the broader advancement
            of technology and security. This project has the potential to
            positively impact society by enhancing digital identity verification
            and privacy protection, ensuring a more secure and efficient digital
            landscape for all.
          </p>
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  sectionRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Overview;
