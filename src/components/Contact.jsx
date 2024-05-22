import PropTypes from "prop-types";
import { useState } from "react";

const Contact = ({ sectionRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const sendEmail = () => {
    setErrors({
      name: formData.name === "",
      email: formData.email === "",
      subject: formData.subject === "",
      message: formData.message === "",
    });

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    )
      return;

    location.href =
      "mailto:placeholder@email.com?subject=[Federated-Auth]: " +
      formData.subject +
      "&body=" +
      "Name: " +
      formData.name +
      "%0D%0A%0D%0A" +
      "Email: " +
      formData.email +
      "%0D%0A%0D%0A" +
      "Message: " +
      formData.message;
  };

  return (
    <div
      className="bg-background-950 py-16 lg:px-36"
      id="contact"
      ref={sectionRef}
    >
      <h1 className="mb-8 text-center text-3xl font-medium">Contact Us</h1>
      <div className="mx-8 flex flex-col justify-center space-y-4 sm:mx-0">
        <div className="mx-auto w-full sm:w-1/2">
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (formData.name !== "") {
                setErrors({ ...errors, name: false });
              }
            }}
            type="text"
            placeholder="Full Name"
            className={
              "w-full rounded-lg border px-2 py-3 text-sm focus:outline-none " +
              (errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-primary-300 focus:border-primary-300")
            }
          />
          {errors.name && (
            <p className="text-xs text-red-500">Name is required.</p>
          )}
        </div>

        <div className="mx-auto w-full sm:w-1/2">
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (formData.email !== "") {
                setErrors({ ...errors, email: false });
              }
            }}
            type="text"
            placeholder="Email Address"
            className={
              "w-full rounded-lg border px-2 py-3 text-sm focus:outline-none " +
              (errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-primary-300 focus:border-primary-300")
            }
          />
          {errors.email && (
            <p className="text-xs text-red-500">Email Address is required.</p>
          )}
        </div>
        <div className="mx-auto w-full sm:w-1/2">
          <input
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (formData.subject !== "") {
                setErrors({ ...errors, subject: false });
              }
            }}
            type="text"
            placeholder="Subject"
            className={
              "w-full rounded-lg border px-2 py-3 text-sm focus:outline-none " +
              (errors.subject
                ? "border-red-500 focus:border-red-500"
                : "border-primary-300 focus:border-primary-300")
            }
          />
          {errors.subject && (
            <p className="text-xs text-red-500">Subject is required.</p>
          )}
        </div>
        <div className="mx-auto w-full sm:w-1/2">
          <textarea
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (formData.message !== "") {
                setErrors({ ...errors, message: false });
              }
            }}
            type="text"
            placeholder="Enter your message"
            rows="8"
            className={
              "w-full rounded-lg border px-2 py-3 text-sm focus:outline-none " +
              (errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-primary-300 focus:border-primary-300")
            }
          />
          {errors.message && (
            <p className="text-xs text-red-500">Message is required.</p>
          )}
        </div>
        <div className="mx-auto flex w-full cursor-pointer flex-col sm:w-1/2">
          <a
            className="inline-flex w-full items-center justify-center rounded-md bg-primary-300 px-3 py-2 text-white hover:bg-secondary-300 hover:shadow-xl"
            onClick={sendEmail}
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
