
const LoadingScreen = () => {

  const randomNum = Math.floor(Math.random()*(4-0+1))+ 0;

  const loadingContent = [
    "Hoodies: Because you don't have to dress fancy to look awesome.",
    "T-shirts: The simplest canvas for the boldest ideas.",
    "Jackets: The perfect blend of style and function for any weather.",
    "Sweatshirts: The unofficial uniform of relaxation.",
    "Varsity jackets: Where athleticism meets style in perfect harmony."
  ]

  setTimeout(() => {
    // window.onload = ()=>{
     document.getElementById('loader').style.display = 'none';
    // }
   }, 4000);


    return (
      <div id="loader"
        className={`fixed w-full h-full flex text-center items-center justify-center bg-white z-50 transition-opacity"
        }`}
      >
        <h3 className="text-[30px] animate-pulse ">{loadingContent[randomNum]}</h3>
        {/* <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/triangle-spinner.gif" alt="" className="w-[250px]"/> */}
      </div>
    );
};

export default LoadingScreen;
