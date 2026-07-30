

function StatCard({ icon, number, label }) {
    return (
      <div className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
  
        <div className="flex justify-center text-blue-700 text-5xl mb-5">
          {icon}
        </div>
  
        <h3 className="text-3xl font-bold text-gray-800">
          {number}
        </h3>
  
        <p className="mt-3 text-gray-600">
          {label}
        </p>
  
      </div>
    );
  }
  
  export default StatCard;