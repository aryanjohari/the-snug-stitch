/* eslint-disable jsx-a11y/anchor-is-valid */
import "aos/dist/aos.css";
import React from "react";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  const clients = [
    { image: "/images/clients/3FM LOGO.jpeg" },
    { image: "/images/clients/5ntf3oqg.jbg.webp" },
    { image: "/images/clients/atharva.png" },
    { image: "/images/clients/BESICK LOGO.png" },
    { image: "/images/clients/koverify.jpg" },
    { image: "/images/clients/securanx.jpg" },
    { image: "/images/clients/monster-logo.jpeg" },
    { image: "/images/clients/dj-logo.png" },
    { image: "/images/clients/rajiv-logo.jpeg" },
    { image: "/images/clients/sharekhan-logo.jpeg" },
    { image: "images/clients/upg.jpeg"}
  ];

  let reviews = [
    "I recently ordered custom t-shirts from The Snug Stitch for my team, and I was extremely impressed with the quality of garments.",
    "I needed custom t-shirts for a promotional event, and The Snug Sticth delivered beyond my expectations. The printing quality was excellent.",
    "The Snug Stitch is a reliable partener for top-notch custom clothing solutions.",
  ];

  let review_names = ["Jyotshna Das", "Jagruti Sawant", "Aryan Johari"];

  let loopNo = 0;
  setInterval(() => {
    if (document.getElementById("review") !== null) {
      document.getElementById("review").innerText = reviews[loopNo];
    }
    if (document.getElementById("names") !== null) {
      document.getElementById("names").innerText = review_names[loopNo];
      loopNo++;

      if (loopNo >= review_names.length) {
        loopNo = 0;
      }
    }
  }, 2000);

  return (
    <div>
      <h3 className="mt-10 text-center font-extrabold text-2xl">HOW WE WORK</h3>
      <section data-aos="fade-right">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Design-how-we-work"
                src="/images/section-imgs/design-section.jpeg"
                className="absolute inset-0 h-full w-full object-cover hover:scale-110"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Design</h2>
              <p className="mt-4 text-gray-600">
                <ul>
                  <li>
                    &#8226; We can assist you in creating a unique design or we
                    can convert your logo into a digital format for you.
                  </li>
                  <li>
                    &#8226; Our services offer flexibility in terms of size and
                    color options for your logo.
                  </li>
                  <li>
                    &#8226; You can choose to have your design embroidered or
                    applied using heat transfer methods. To gather inspiration,
                    feel free to explore our gallery or check our social media
                    feeds.
                  </li>
                </ul>
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-left">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Design-how-we-work"
                src="/images/section-imgs/clothing-section.webp"
                className="absolute inset-0 h-full w-full object-cover hover:scale-110"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Clothing</h2>
              <p className="mt-4 text-gray-600">
                <ul>
                  <li>
                    &#8226; We have an extensive range of brands with a wide
                    variety of designs and colors available.
                  </li>
                  <li>
                    &#8226; Our services include embroidery and heat transfer,
                    allowing us to customize apparel items, blankets, towels,
                    backpacks, and more To help you find exactly what you're
                    looking for, we encourage you to explore our catalogs.
                  </li>
                  <li>
                    &#8226; If you can't find the specific item you need, please
                    let us know, and we'll be happy to assist you in finding it.
                  </li>
                </ul>
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:border hover:border-black "
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-right">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Design-how-we-work"
                src="/images/section-imgs/order-section.png"
                className="absolute inset-0 h-full w-full object-cover hover:scale-110"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Orders</h2>
              <p className="mt-4 text-gray-600">
                <ul>
                  <li>
                    &#8226; If you have any inquiries and are not yet ready to
                    proceed, feel free to reach out to us via phone, chat, or
                    email, and we'll be glad to assist you.
                  </li>
                  <li>
                    &#8226; You'll have the opportunity to examine and
                    experience samples of our most popular items and designs
                    firsthand. The completion time for orders may range from a
                    few days to two weeks, depending on the order size.
                  </li>
                  <li>
                    &#8226; No order is considered too small or too large for us
                    to handle. We offer multiple payment options, including
                    cash, checks, credit cards, and PayPal, to accommodate your
                    preferences.
                  </li>
                </ul>
              </p>
              <a
                href="/comtact"
                className="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full text-center uppercase text-5xl mt-36 font-bold">our bestsellers</div>
      <section className="grid lg:grid-cols-4 grid-cols-2 gap-1 lg:gap-4 mx-7 mt-14">
        <div className="group relative block bg-black">
          <img
            alt="Hoodie"
            src="/images/products/men/hoodie men plain.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-xl font-bold text-white sm:text-2xl">Hoodies</p>
            <div className="flex">
              <a href="/men-hoodies" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mr-2">
                  men
                </p>
              </a>
              <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                |
              </p>
              <a href="/women-hoodies" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                  women
                </p>
              </a>
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col">
              <p className="text-md text-white w-full text-center font-bold">
                A cozy fashion staple that keeps you warm and in vogue.</p>
                <br></br>
              <p className="text-md text-white font-bold">&#8226; 320 GSM</p>
              <p className="text-md text-white font-bold">&#8226; PC fleece material</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt="Varsity"
            src="/images/products/men/MEN VARSITY.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-xl font-bold text-white sm:text-2xl">Jackets</p>
            <div className="flex">
              <a href="/men-jackets" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mr-2">
                  men
                </p>
              </a>
              <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                |
              </p>
              <a href="/women-jackets" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                  women
                </p>
              </a>
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col">
                <p className="text-md text-white font-bold">
                The ultimate blend of practicality and fashion for any occasion
                </p>
                <br></br>
                <p className="text-md text-white font-bold">&#8226; 320 GSM</p>
              <p className="text-md text-white font-bold">&#8226; PC fleece material</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt="Sweatshirt"
            src="/images/products/men/men oversize sweatshirt.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-xl font-bold text-white sm:text-2xl">Sweatshirts</p>
            <div className="flex">
              <a href="/men-sweatshirts" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mr-2">
                  men
                </p>
              </a>
              <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                |
              </p>
              <a href="/women-sweatshirts" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                  women
                </p>
              </a>
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-md text-white w-full text-center font-bold">
                Cozy, stylish essentials that keep you warm and effortlessly on-trend
                </p>
                <br></br>
                <p className="text-md text-white font-bold">&#8226; 280 GSM</p>
              <p className="text-md text-white font-bold">&#8226; PC fleece material</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt="Tshirt"
            src="/images/products/men/oversize tshirt.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-xl font-bold text-white sm:text-2xl">T-shirts</p>
            <div className="flex">
              <a href="/men-tshirts" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mr-2">
                  men
                </p>
              </a>
              <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                |
              </p>
              <a href="/women-tshirts" className="hover:scale-110">
                <p className="text-sm font-medium uppercase tracking-widest text-white mx-2">
                  women
                </p>
              </a>
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-md text-white w-full text-center font-bold">
                Casual elegance for a relaxed yet fashionable look
                </p>
                <br></br>
                <p className="text-md text-white font-bold">&#8226; 220 GSM</p>
              <p className="text-md text-white font-bold">&#8226; Cotton</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36">
        <h3 className="w-full text-center uppercase font-extrabold text-6xl">
          {" "}
          why choose us{" "}
        </h3>
        <div className="px-20 pt-10 lg:grid lg:grid-cols-4">
          <a
            href=""
            className="group relative block h-64 sm:h-80 lg:h-96 w-72"
            data-aos="fade-right"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black" />
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-fabric-selection bg-cover">
              <div className="backdrop-blur-sm h-full">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 mt-32 text-white">
                  <img src="/images/icons/premium.png" alt="" />
                  <h2 className="mt-4 text-xl sm:text-2xl font-extrabold text-white">
                    Premium Handcrafted Fabrics
                  </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                    Premium Handcrafted Fabrics
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href=""
            className="group relative block h-64 sm:h-80 lg:h-96 w-72"
            data-aos="fade-up"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black" />
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-on-time bg-cover">
              <div className=" backdrop-blur-sm h-full w-full">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 mt-32 text-white">
                  <img src="/images/icons/delivery.png" alt="" />
                  <h2 className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
                    On Time Delivery
                  </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                    On Time Delivery
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href=""
            className="group relative block h-64 sm:h-80 lg:h-96 w-72"
            data-aos="fade-down"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black" />
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-in-house bg-cover">
              <div className="backdrop-blur-sm h-full">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 mt-32 text-white">
                  <img src="/images/icons/manufacture.png" alt="" />
                  <h2 className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
                    In-house Cut-to-pack
                  </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                    In-house Cut-to-pack
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href=""
            className="group relative block h-64 sm:h-80 lg:h-96 w-72"
            data-aos="fade-left"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black" />
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-quality-affordable bg-cover">
              <div className="backdrop-blur-sm h-full">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 mt-32 text-white">
                  <img src="/images/icons/fabric.png" alt="" />
                  <h2 className="mt-4 text-xl font-extrabold sm:text-2xl text-white">
                    Quality With Affordability
                  </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                    Quality With Affordability
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-36">
          <img src="/images/infographic.png" alt="process"></img>
        </div>
      </section>
      <div className="mt-36">
        <h3 className="text-center font-extrabold text-5xl">Our Clients</h3>
        <div className="">
          <Marquee>
            {clients.map((client) => {
              return (
                <img
                  src={client.image}
                  S
                  alt=""
                  className="h-32 w-32 mx-10 my-4 rounded-md"
                ></img>
              );
            })}
          </Marquee>
        </div>
      </div>
      <div>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
            <div className="mt-8 flex justify-center">
              <blockquote className="rounded-lg p-6  sm:p-8 items-center w-auto">
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="/images/section-imgs/avatar.jpg"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p
                      className="mt-0.5 text-lg font-medium text-gray-900"
                      id="names"
                    ></p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700" id="review"></p>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
