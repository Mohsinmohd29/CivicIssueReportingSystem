import {
    LuMapPin,
    LuMail,
    LuPhone,
  } from "react-icons/lu";
  
  import ContactInfoCard from "./ContactInfoCard";
  
  function ContactSection() {
    return (
      <section
        id="contact"
        className="py-24 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center mb-16">
  
            <span className="text-blue-700 uppercase tracking-widest font-semibold">
              Contact
            </span>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Get In Touch
            </h2>
  
            <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions, suggestions, or feedback? We'd love to hear from
              you. Reach out and help us build smarter communities together.
            </p>
  
          </div>
  
          <div className="grid lg:grid-cols-2 gap-14">
  
            {/* Left Side */}
  
            <div className="space-y-6">
  
              <ContactInfoCard
                icon={<LuMapPin />}
                title="Our Location"
                value="Bhopal, Madhya Pradesh, India"
              />
  
              <ContactInfoCard
                icon={<LuMail />}
                title="Email"
                value="support@civicissue.com"
              />
  
              <ContactInfoCard
                icon={<LuPhone />}
                title="Phone"
                value="+91 00000 00000"
              />
  
            </div>
  
            {/* Right Side */}
  
            <form className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-6">
  
              <div>
  
                <label className="block mb-2 font-medium text-gray-700">
                  Name
                </label>
  
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
  
              </div>
  
              <div>
  
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
  
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
  
              </div>
  
              <div>
  
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
  
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
  
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
  
            </form>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default ContactSection;