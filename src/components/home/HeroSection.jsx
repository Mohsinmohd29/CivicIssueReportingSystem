import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.svg";

function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              🚀 Smart Civic Reporting Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Build a Better City,
              <span className="text-blue-700"> One Report </span>
              at a Time.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Report potholes, garbage, broken streetlights, drainage issues,
              and other civic problems in just a few clicks. Help authorities
              resolve issues faster and make your community cleaner and safer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/register">
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </button>
              </Link>

              <a href="#about">
                <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Learn More
                </button>
              </a>

            </div>

            {/* Small Stats */}

            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-blue-700">10K+</h3>
                <p className="text-gray-600">Citizens</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">5K+</h3>
                <p className="text-gray-600">Issues Reported</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-700">98%</h3>
                <p className="text-gray-600">Resolved</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Civic Issue Reporting"
              className="w-full max-w-xl drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;