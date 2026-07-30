import aboutImage from "../../assets/images/about.svg";
import { LuCircleCheck } from "react-icons/lu";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 scroll-mt-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Civic Issue Reporter"
              className="w-full max-w-lg"
            />
          </div>

          {/* Right Side */}
          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Building Smarter Communities Together
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-8">
              Civic Issue Reporter is a platform that enables citizens to
              report civic problems quickly and efficiently. From potholes
              and garbage to broken streetlights and drainage issues, every
              report helps create cleaner, safer, and smarter cities.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <LuCircleCheck className="text-blue-700 text-2xl" />
                <span className="text-gray-700">
                  Transparent complaint management
                </span>
              </div>

              <div className="flex items-center gap-4">
                <LuCircleCheck className="text-blue-700 text-2xl" />
                <span className="text-gray-700">
                  Real-time complaint tracking
                </span>
              </div>

              <div className="flex items-center gap-4">
                <LuCircleCheck className="text-blue-700 text-2xl" />
                <span className="text-gray-700">
                  Strong collaboration between citizens and authorities
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;