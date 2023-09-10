import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Products
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
      <div>
        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 relative">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                New Collection
              </h2>
              <p className="max-w-md mx-auto mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>
            <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
              <li>
                <Link to="/Men" className="relative block group">
                  <img
                    src="/images/category/men2.jpeg"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50"
                  />
                  <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                    <h3 className="text-xl font-bold text-black m-auto">Men</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Women" className="relative block group">
                  <img
                    src="images/category/women.jpeg"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50"
                  />
                  <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                    <h3 className="text-xl font-bold text-black m-auto">Women</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Kids" className="relative block group">
                  <img
                    src="images/category/kids.jpeg"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50"
                  />
                  <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                    <h3 className="text-xl font-bold text-black m-auto">Kids</h3>
                  </div>
                </Link>
              </li>
              <li>
                <a href="/Accessories" className="relative block group">
                  <img
                    src="images/category/accessories.avif"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50"
                  />
                  <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                    <h3 className="text-xl font-bold text-black m-auto">
                      Accessories
                    </h3>
                  </div>
                </a>
              </li>

              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50px]">
                <button className="bg-black text-white w-36 h-16 hidden lg:block shadow-xl hover:scale-105 cursor-pointer">
                  <a href="/contact" className="font-bold">ENQUIRE NOW</a>
                </button>
              </div>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
