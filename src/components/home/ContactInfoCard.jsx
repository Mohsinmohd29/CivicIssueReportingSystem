function ContactInfoCard({ icon, title, value }) {
    return (
      <div className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
  
        <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl">
          {icon}
        </div>
  
        <div>
          <h4 className="font-semibold text-gray-800">
            {title}
          </h4>
  
          <p className="text-gray-600">
            {value}
          </p>
        </div>
  
      </div>
    );
  }
  
  export default ContactInfoCard;