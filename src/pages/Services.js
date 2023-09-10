import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Services
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
      <section>
        <div className="flex flex-wrap mt-10">
          <div className="w-1/2 relative">
            <a href="/Accessories" className="relative block group m-1">
              <img
                src="/images/services/varsity.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="text-xl font-bold text-black m-auto uppercase">
                  College Varsity jackets
                </h3>
              </div>
            </a>
          </div>
          <div className="w-1/2 p-2">
            <img
              src="/images/services/cafe uniform.webp"
              alt=""
              className="object-cover w-full h-full rounded-md"
            ></img>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};
