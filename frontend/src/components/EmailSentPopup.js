import React, { useState, useEffect } from 'react';

const EmailSentPopup = ({ isOpen }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Close the popup after 3 seconds
    }
  }, [isOpen]);

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-lg font-semibold text-green-600">
              Email has been sent!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailSentPopup;
