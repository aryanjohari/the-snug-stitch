import React, { useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [customFormData, setCustomFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    customFormData.email &&
      customFormData.firstName &&
      customFormData.lastName &&
      customFormData.email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: customFormData.email,
        MERGE1: customFormData.firstName,
        MERGE2: customFormData.lastName,
        MERGE4: customFormData.number,
      });
    setCustomFormData({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="justify-center items-center flex flex-col">
      <div className="text-center">
        <h3 className="text-white">Join our email list for future updates.</h3>
      </div>

      <div className="">
        <div className="m-3">
          <label className="sr-only" htmlFor="firstName">
            Name
          </label>
          <input
            className="w-96 rounded-lg h-8 border-2 border-black p-2"
            placeholder="Enter your name"
            type="text"
            name="firstName"
            id="firstName"
            value={customFormData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="m-3">
          <label className="sr-only" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-full rounded-lg h-8 border-2 border-black p-2"
            placeholder="Enter your last name"
            type="text"
            name="lastName"
            id="lastName"
            value={customFormData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="m-3">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg h-8 border-2 border-black p-2"
            placeholder="Enter your email"
            type="text"
            name="email"
            id="email"
            value={customFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="m-3">
          <label className="sr-only" htmlFor="number">
            Number
          </label>
          <input
            className="w-full rounded-lg h-8 border-2 border-black p-2"
            placeholder="Enter your number"
            type="text"
            name="number"
            id="number"
            value={customFormData.number}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="hover:bg-white hover:border-2 hover:border-black hover:text-black w-20 h-10 rounded-lg text-white bg-black cursor-pointer uppercase">
        submit
      </button>
    </form>
  );
};

export default CustomForm;
