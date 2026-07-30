function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-4xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
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

export default FeatureCard;