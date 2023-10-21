import { Link } from "react-router-dom";

export const Printing = () => {
  return (
    <div>
      <div>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Printing
                <span className="sm:block"> Increase Conversion. </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white hover:bg-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  to="/products"
                >
                  View Products
                </Link>
                <Link
                  className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
      <section data-aos="fade-right" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="DTF-printing"
                src={require("../assets/6 DTF.jpg")}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">DTF Printing</h2>
              <p className="mt-4 text-gray-600">
              DTF printing is a method of direct-to-film printing that allows for high-quality and vibrant prints on fabrics. It involves printing designs directly onto a film, which is then transferred onto the desired fabric using heat and pressure. DTF printing offers versatility and durability, making it suitable for apparel, fabrics, and other items.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-left" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="reflective-print"
                src="/images/printing/reflective.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Reflective Print</h2>
              <p className="mt-4 text-gray-600">
              Refractive printing is a specialized printing technique that uses reflective materials to create eye-catching and dynamic designs. The process involves printing designs onto a surface that contains tiny reflective particles or layers. When light hits the printed design, it bounces off the reflective elements, creating a visually striking and reflective effect. Refractive printing is often used to enhance visibility, add a futuristic touch, or create unique patterns on clothes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="screen-printing"
                src="/images/printing/screen.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Screen Printing</h2>
              <p className="mt-4 text-gray-600">
              Screen printing is a versatile and widely used printing method that involves applying ink onto a fabric through a mesh screen. The process utilizes a stencil to control the ink placement, and a squeegee is used to push the ink through the screen onto the fabric. Screen printing is valued for its durability, versatility, and the ability to reproduce intricate designs with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-left" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="puff-printing"
                src="/images/printing/puff.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Puff Printing</h2>
              <p className="mt-4 text-gray-600">
              Puff printing is a specialized technique that adds depth and texture to printed designs. It involves using a special ink that expands when exposed to heat, resulting in a raised effect. The process typically starts with screen printing the design using the puff ink, which contains additives that cause it to puff up. Once printed, the design is heated, causing the ink to expand and create a three-dimensional effect
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="embroidery-printing"
                src="/images/printing/embroidery.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Embroidery</h2>
              <p className="mt-4 text-gray-600">
              Embroidery is a decorative technique that involves stitching designs onto fabric using needle and thread. It is a popular method for adding logos, text, and intricate patterns to garments, accessories, and other fabric items. The process typically uses special embroidery machines that automate the stitching process based on a digital design. Embroidery offers a durable and high-quality finish, and it can be done in a wide range of colors and thread types.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-left" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="gold-printing"
                src="/images/printing/gold.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Gold Printing</h2>
              <p className="mt-4 text-gray-600">
              Gold printing is a specialized printing technique that involves using gold ink or foil to create metallic and luxurious designs. The process typically involves applying gold ink or foil onto fabric using heat and pressure. Gold printing adds a touch of sophistication and luxury to printed products, making them stand out and catch attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" className="hover:drop-shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="sublimation-printing"
                src="/images/printing/sublimation.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Sublimation Printing</h2>
              <p className="mt-4 text-gray-600">
              Sublimation printing is a method that uses heat to transfer dye onto fabrics. The process involves printing the design onto a special sublimation paper using sublimation inks. When heat is applied, the ink turns into a gas and penetrates the material's surface, resulting in vibrant and long-lasting prints. Sublimation printing offers excellent color reproduction, durability, and the ability to print intricate details. It is commonly used for custom apparel, personalized gifts, and promotional items.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
