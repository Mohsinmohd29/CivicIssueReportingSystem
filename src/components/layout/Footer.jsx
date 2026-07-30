import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-white">
              Civic Issue Reporter
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Helping citizens report civic issues quickly and enabling
              authorities to resolve them efficiently for cleaner,
              safer, and smarter communities.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-blue-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <p>📍 Bhopal, Madhya Pradesh</p>

              <p>📧 support@civicissue.com</p>

              <p>📞 +91 00000 00000</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaTwitter size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Civic Issue Reporter. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Made with <FaHeart className="text-red-500" /> for better communities
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;