import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  if(isLoading){
    return(
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 transition-opacity ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-indigo-500 p-6 rounded-full shadow-2xl">
        <div className="h-16 w-16 border-t-4 border-t-indigo-200 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
    );
  }
  return null;
};

export default LoadingScreen;
