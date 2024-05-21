import PropTypes from "prop-types";

const Contact = ({ sectionRef }) => {
  return (
    <div
      className="bg-background-950 py-16 lg:px-36"
      id="contact"
      ref={sectionRef}
    >
      <h1 className="mb-8 text-center text-3xl font-medium">Contact Us</h1>
      <div className="mx-8 flex flex-col justify-center space-y-4 sm:mx-0">
        <input
          type="text"
          placeholder="Full Name"
          className="mx-auto w-full rounded-lg border border-primary-300 px-2 py-3 text-sm focus:border-primary-300 focus:outline-none sm:w-1/2"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="mx-auto w-full rounded-lg border border-primary-300 px-2 py-3 text-sm focus:border-primary-300 focus:outline-none sm:w-1/2"
        />
        <input
          type="text"
          placeholder="Subject"
          className="mx-auto w-full rounded-lg border border-primary-300 px-2 py-3 text-sm focus:border-primary-300 focus:outline-none sm:w-1/2"
        />
        <textarea
          type="text"
          placeholder="Enter your message"
          rows="8"
          className="mx-auto w-full rounded-lg border border-primary-300 px-2 py-3 text-sm focus:border-primary-300 focus:outline-none sm:w-1/2"
        />
        <div className="mx-auto flex w-full flex-col sm:w-1/2">
          <a
            className="inline-flex w-full items-center justify-center rounded-md bg-primary-300 px-3 py-2 text-white hover:bg-secondary-300 hover:shadow-xl"
            href="mailto:placeholder@email.com"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  sectionRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Contact;
