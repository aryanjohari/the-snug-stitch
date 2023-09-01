import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.companyName) errors.companyName = "Company name is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const submitEmail = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    try {
      emailjs
        .sendForm(
          "service_ofzht0c",
          "template_i5cjhra",
          formData,
          "XHVM0_35vRrk3kiG2"
        )
      setFormData({
        name: "",
        companyName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="m-7 lg:border-r-2">
        <div className="font-bold text-2xl mb-5">Find Us</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2290472908626!2d72.84624627531979!3d19.228846982007536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1db74560001%3A0x3fa62b4d01885dca!2sThe%20Snug%20Stitch!5e0!3m2!1sen!2sin!4v1693226810061!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
      <div className="m-7">
        <div className="font-bold text-2xl mb-5">Send Us an Email</div>
        <div>
          <form onSubmit={submitEmail}>
            <div className="m-3">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className={`w-full rounded-lg border border-gray-900 p-3 text-sm ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="m-3">
              <label className="sr-only" htmlFor="companyName">
                Company Name
              </label>
              <input
                className={`w-full rounded-lg border border-gray-900 p-3 text-sm ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your Company name"
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="m-3">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className={`w-full rounded-lg border border-gray-900 p-3 text-sm ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="m-3">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className={`w-full rounded-lg border border-gray-900 p-3 text-sm ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Type your Requirements"
                id="message"
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};
