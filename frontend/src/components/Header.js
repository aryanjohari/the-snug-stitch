import { Link } from "react-router-dom";
import "../styles.css";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header class="bg-black drop-shadow-xl">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className=" text-teal-600 flex gap-2">
              <img
                src="/images/logo.jpg"
                alt="the-snug-stitch-logo"
                className="object-contain w-14"
              ></img>
              <img
                src="/images/logoname.jpg"
                alt="logo-name"
                className="h-14"
              />
            </Link>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to="/products"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/printing"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    Printing
                  </Link>
                </li>

                <li>
                  <Link
                    to="/clients"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    Clients
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-white transition hover:text-gray-500/75"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4 mr-12">
              <div class="block md:hidden">
                <button
                  class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="relative">
                    <ul class="space-y-1 absolute">
                      <Link
                        to="/products"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        Products
                      </Link>
                      <Link
                        to="/services"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        Services
                      </Link>
                      <Link
                        to="/printing"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        Printing
                      </Link>
                      <Link
                        to="/about"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/contact"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        Contact Us
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
