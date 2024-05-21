import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Background = ({ sectionRef }) => {
  const paragraphRef = useRef(null);
  const [paragraphHeight, setParagraphHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (paragraphRef.current) {
        setParagraphHeight(paragraphRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="min-h-screen px-8 pt-20 sm:px-20 lg:px-36"
      id="background"
      ref={sectionRef}
    >
      {/* Project Vision */}
      <h1 className="pb-8 text-center text-3xl font-medium">Project Vision</h1>
      <p className="text-text text-center">
        This project aims to create a novel framework merging various biometric
        methods to enhance mobile-based authentication accuracy. It also
        integrates federated learning to advance privacy protection, with the
        primary hypothesis being that it can boost authentication performance
        while safeguarding sensitive biometric data, thus enhancing privacy.
      </p>

      {/* Research Objectives */}
      <h1 className="pb-8 pt-20 text-center text-3xl font-medium">
        Research Objectives
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-primary-800 to-primary-900 px-4 py-6 pb-12 shadow-lg lg:mr-5 lg:w-1/3">
          <div
            className="flex items-center justify-center"
            style={{ height: paragraphHeight }}
          >
            <p className="pb-8 text-center text-lg font-semibold text-text-100">
              Multimodal Biometric Fusion
            </p>
          </div>
          <p className="text-center text-text-100">
            The project innovates mobile biometric authentication with
            multimodal fusion, integrating diverse features like facial,
            fingerprint, iris, voice, physiological signals, and behavior. It
            aims to reuse mobile sensors for unique biometric extraction,
            delivering cost-effective solutions.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col rounded-lg bg-primary-900 px-4 py-6 pb-12 shadow-lg lg:mt-0 lg:w-1/3">
          <div
            className="flex items-center justify-center"
            style={{ height: paragraphHeight }}
          >
            <p className="pb-8 text-center text-lg font-semibold text-text-100">
              Federated Learning Implementation
            </p>
          </div>
          <p className="text-center text-text-100">
            Federated learning is crucial in this project, preserving privacy by
            collaboratively training authentication models across mobile
            devices. It avoids disclosing sensitive biometric data to central
            servers, ensuring robust privacy protection as data remains securely
            stored on users&#39; devices throughout the process.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col rounded-lg bg-gradient-to-r from-primary-900 to-primary-800 px-4 py-6 pb-12 shadow-lg lg:ml-5 lg:mt-0 lg:w-1/3">
          <div className="flex items-center justify-center" ref={paragraphRef}>
            <p className="pb-8 text-center text-lg font-semibold text-text-100">
              Performance Enhancement for Accurate and Robust Authentication
            </p>
          </div>
          <p className="h-full text-center text-text-100">
            The project&#39;s primary objective is to enhance authentication
            performance by minimizing false rejections and resisting
            presentation attacks in challenging settings. Our aim is to showcase
            a functional prototype that demonstrates improved authentication
            performance using federated authentication across various biometric
            modalities.
          </p>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  sectionRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Background;
