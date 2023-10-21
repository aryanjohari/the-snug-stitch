import React, { useState, useEffect } from "react";
import MailchimpFormContainer from "./MailChimpSubscribeForm";

const SubscribePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="shadow-xl">
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900 z-50">
          <div className="bg-popup h-[312px] w-[225px] bg-cover"/>
          <div className="bg-white p-4 max-w-md relative z-50 text-center">
            <h3 className="font-bold text-lg">Subscribe to get exiting emails</h3>
            <button
              className="absolute top-0 right-0 m-2 text-black hover:text-white hover:bg-black p-2 rounded-full cursor-pointer"
              onClick={handleClose}
            >
              X
            </button>
            <MailchimpFormContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribePopup;
