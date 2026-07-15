import { Link } from "react-router-dom";
import { useState } from "react";
import countriesData from "../data/countriesData.js";
import CountryModal from "../components/CountryModal/CountryModal.jsx";
import { motion } from "framer-motion";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F8FAFC] dark:bg-[#0B1220] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

          <div className="text-center">

            <span className="text-[#AB2330] dark:text-yellow-500 font-semibold uppercase tracking-wider">
              Study Destinations
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A] dark:text-white">
              Choose Your Dream Destination
            </h1>

            <p className="mt-5 text-slate-600 dark:text-white max-w-3xl mx-auto text-lg">
              Explore globally recognized destinations offering quality
              education, career opportunities, and immigration pathways.
            </p>

          </div>

        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">

          {countriesData.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`
                grid
                lg:grid-cols-2
                gap-12
                items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* Image */}
              <div className="overflow-hidden rounded-3xl shadow-3xl">
                <img
                  src={country.image}
                  alt={country.name}
                  className="
                    w-full
                    h-[450px]
                    object-cover
                    hover:scale-105
                    transition
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div>

                <span className="text-[#AB2330] dark:text-yellow-500 font-semibold uppercase tracking-wider">
                  Study Destination
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A] dark:text-white">
                  {country.name}
                </h2>

                <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  {country.description}
                </p>

                {/* Quick Highlights */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {country.courses?.slice(0, 3).map((course, idx) => (
                    <span
                      key={idx}
                      className="
                        bg-white
                        dark:bg-[#C89B3C]
                        border
                        border-slate-200
                        dark:border-none
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        text-slate-700
                      "
                    >
                      {course}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  <Link
                    to="/contact"
                    className="
                      bg-[#AB2330]
                      dark:bg-[#C89B3C]
                      hover:bg-[#941F2A]
                      dark:hover:bg-yellow-500
                      text-white
                      dark:text-[#0B2E4A]
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                      text-center
                      transition
                    "
                  >
                    Apply Now
                  </Link>

                  <button
                    onClick={() => setSelectedCountry(country)}
                    className="
                      border-2
                      border-[#0B2E4A]
                      text-[#0B2E4A]
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                      cursor-pointer
                      hover:bg-[#0B2E4A]
                      hover:text-white
                      transition
                      dark:text-yellow-500
                      dark:hover:text-[#0B2E4A]
                      dark:border-[#C89B3C]
                      dark:text-[#0B2E4A]
                      dark:hover:bg-[#C89B3C]
                    "
                  >
                    Learn More
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* Country Modal */}
      <CountryModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </>
  );
};

export default Countries;