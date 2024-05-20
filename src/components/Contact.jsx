const Contact = () => {
  return (
    <div className="px-36 py-16" id="contact">
      <h1 className="mb-8 text-center text-3xl font-medium">Contact Us</h1>
      <div className="flex flex-col justify-center space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="mx-auto w-1/2 rounded-lg border border-gray-300 px-2 py-3 text-sm  focus:border-blue-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="mx-auto w-1/2 rounded-lg border border-gray-300 p-2 text-sm  focus:border-blue-500 focus:outline-none"
        />
        <textarea
          type="text"
          placeholder="Enter your message"
          rows="8"
          className="mx-auto w-1/2 rounded-lg border border-gray-300 p-2 text-sm  focus:border-blue-500 focus:outline-none"
        />
        <div className="mx-auto flex w-1/2">
          <a
            className="inline-flex w-full items-center justify-center rounded-md border border-slate-700 py-2"
            href="mailto:placeholder@email.com"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
