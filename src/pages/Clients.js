import { Link } from "react-router-dom";

export const Clients = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Clients
                <span className="sm:block"> Increase Conversion. </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  to="/products"
                >
                  View Products
                </Link>
                <Link
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  to="/contact"
                >
                  Become a Client
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-black">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://www.3folksmedia.com/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/3FM LOGO.jpeg"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://www.tcetmumbai.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/5ntf3oqg.jbg.webp"
                />
                </a>
              </div>
              <div className="w-full p-1 md:p-2">
                <a href="https://koverify.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/koverify.jpg"
                />
                </a>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <a href="https://besick.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/BESICK LOGO.png"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://atharvacoe.ac.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/atharva.png"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://securanx.com/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/securanx.jpg"
                />
                </a>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 hidden">
                <a href="https://www.3folksmedia.com/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/dj-logo.png"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2 ">
                <a href="https://www.djsce.ac.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/dj-logo.png"
                />
                </a>
              </div>
              <div className="w-full p-1 md:p-2">
                <a href="https://www.instagram.com/monsterpokercommunity/?hl=en" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/monster-logo.jpeg"
                />
                </a>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <a href="https://www.sharekhan.com/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/sharekhan-logo.jpeg"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://rgmctmc.edu.in/" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/rajiv-logo.jpeg"
                />
                </a>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <a href="https://upgcm.ac.in/Index.aspx" className="cursor-pointer">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/images/clients/upg.jpeg"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
