import React, { useState } from "react";
import MailchimpFormContainer from "./MailChimpSubscribeForm";

const SubscribePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="shadow-xl">
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900 z-50">
          <div className="bg-white p-4 rounded-lg max-w-md relative z-50">
            <h3>Subscribe to get exiting emails</h3>
            <button
              className="absolute top-0 right-0 m-2 text-black hover:text-white hover:bg-black p-2 rounded-full"
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
