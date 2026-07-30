function HowItWorksCard({ icon, title, description, step }) {
    return (
      <div className="relative bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
  
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shadow-lg">
          {step}
        </div>
  
        <div className="w-20 h-20 mx-auto mt-6 mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-4xl">
          {icon}
        </div>
  
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h3>
  
        <p className="text-gray-600 leading-7">
          {description}
        </p>
  
      </div>
    );
  }
  
  export default HowItWorksCard;