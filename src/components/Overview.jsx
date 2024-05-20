const Overview = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] px-36 pt-12" id="overview">
      {/* Broader Impacts */}
      <div className="flex flex-row pb-8 pt-20">
        <div className="w-1/2 pr-4">
          <h4 className="mb-2 text-2xl font-medium">Broader Impacts</h4>
          <p className="italic text-slate-500">
            The proposed work, Federated-Auth, extends its broader impacts
            beyond the realm of biometric authentication. By reducing the need
            for additional hardware and utilizing existing mobile device
            sensors, it aligns seamlessly with sustainability goals, curbing
            electronic waste and minimizing the energy footprint. Furthermore,
            Federated-Auth fosters knowledge exchange and collaboration,
            bridging the gap between academia and industry, and contributing to
            the broader advancement of technology and security. This project has
            the potential to positively impact society by enhancing digital
            identity verification and privacy protection, ensuring a more secure
            and efficient digital landscape for all.
          </p>
        </div>
        <div className="p-auto ml-4 flex w-1/2 items-center justify-center rounded-md border border-slate-700">
          Photo here
        </div>
      </div>

      {/* Modalities */}
      <div className="flex flex-row pb-8 pt-20">
        <div className="p-auto mr-4 flex w-1/2 items-center justify-center rounded-md border border-slate-700">
          Photo here
        </div>
        <div className="w-1/2 pl-4">
          <h4 className="mb-2 text-2xl font-medium">Methodology</h4>
          <p className="italic text-slate-500">
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
            privacy-preserving technique that enables collabo- rative training
            across mobile devices without exposing sensitive biometric data to a
            central server. This novel aspect of our methodology ensures
            individual privacy protection while improving authentication
            accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
