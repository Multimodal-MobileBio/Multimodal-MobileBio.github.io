import { useRef, useEffect, useState } from "react";

const Background = () => {
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
    <div className="min-h-[calc(100vh-64px)] px-36 pt-20" id="background">
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
      <div className="flex flex-row">
        <div className="mr-5 flex w-full flex-col rounded-lg bg-gradient-to-r from-secondary-800 to-secondary-900 px-4 py-6 pb-12 shadow-lg md:w-1/3">
          <div
            className="flex items-center justify-center"
            style={{ height: paragraphHeight }}
          >
            <p className="pb-8 text-center text-lg">
              Multimodal Biometric Fusion
            </p>
          </div>
          <p className="text-center text-slate-600">
            The project innovates mobile biometric authentication with
            multimodal fusion, integrating diverse features like facial,
            fingerprint, iris, voice, physiological signals, and behavior. It
            aims to reuse mobile sensors for unique biometric extraction,
            delivering cost-effective solutions.
          </p>
        </div>
        <div className="flex w-full flex-col rounded-lg bg-secondary-900 px-4 py-6 pb-12 shadow-lg md:w-1/3">
          <div
            className="flex items-center justify-center"
            style={{ height: paragraphHeight }}
          >
            <p className="pb-8 text-center text-lg">
              Federated Learning Implementation
            </p>
          </div>
          <p className="text-center text-slate-500">
            Federated learning is crucial in this project, preserving privacy by
            collaboratively training authentication models across mobile
            devices. It avoids disclosing sensitive biometric data to central
            servers, ensuring robust privacy protection as data remains securely
            stored on users&#39; devices throughout the process.
          </p>
        </div>
        <div className="ml-5 flex w-full flex-col rounded-lg bg-gradient-to-r from-secondary-900 to-secondary-800 px-4 py-6 pb-12 shadow-lg md:w-1/3">
          <div className="flex items-center justify-center" ref={paragraphRef}>
            <p className="pb-8 text-center text-lg">
              Performance Enhancement for Accurate and Robust Authentication
            </p>
          </div>
          <p className="h-full text-center text-slate-500">
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

export default Background;
