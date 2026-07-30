import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMyComplaints } from "../services/complaintService";
import { AuthContext } from "../context/AuthContext";

import { toast } from "react-toastify";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [complaints, setComplaints] = useState([]);

  const [loading, setLoading] = useState(true);

  const totalComplaints = complaints.length;

  const pendingComplaints = complaints.filter(
    (complaint) => complaint.status === "pending"
  ).length;

  const inProgressComplaints = complaints.filter(
    (complaint) => complaint.status === "in-progress"
  ).length;

  const resolvedComplaints = complaints.filter(
    (complaint) => complaint.status === "resolved"
  ).length;

  const fetchComplaints = async () => {

    try {

      const data = await getMyComplaints();

      setComplaints(data.complaints);

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to load dashboard"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchComplaints();

  }, []);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading Dashboard...
      </div>
    );

  }


  return (
    <div>
  
      {/* Header */}
      <div className="mb-10">
  
        <h2 className="text-4xl font-bold text-gray-800">
          👋 Welcome back, {user?.name || "User"}!
        </h2>
  
        <p className="text-gray-600 mt-2 text-lg">
          Here's an overview of your civic reports and their current status.
        </p>
  
      </div>
  
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
  
        <div className="bg-white p-6 rounded-2xl shadow-md">
  
          <h3 className="text-xl font-semibold text-gray-700">
            Total Complaints
          </h3>
  
          <p className="text-4xl font-bold text-blue-700 mt-4">
            {totalComplaints}
          </p>
  
        </div>
  
        <div className="bg-white p-6 rounded-2xl shadow-md">
  
          <h3 className="text-xl font-semibold text-gray-700">
            Pending Issues
          </h3>
  
          <p className="text-4xl font-bold text-yellow-500 mt-4">
            {pendingComplaints}
          </p>
  
        </div>
  
        <div className="bg-white p-6 rounded-2xl shadow-md">
  
          <h3 className="text-xl font-semibold text-gray-700">
            In Progress
          </h3>
  
          <p className="text-4xl font-bold text-blue-500 mt-4">
            {inProgressComplaints}
          </p>
  
        </div>
  
        <div className="bg-white p-6 rounded-2xl shadow-md">
  
          <h3 className="text-xl font-semibold text-gray-700">
            Resolved Issues
          </h3>
  
          <p className="text-4xl font-bold text-green-600 mt-4">
            {resolvedComplaints}
          </p>
  
        </div>
  
      </div>
  
      {/* Recent Complaints */}
      <div className="bg-white rounded-2xl shadow-md p-8">
  
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Complaints
        </h3>
  
        <div className="space-y-5">
  
          {complaints.map((complaint) => (
  
            <div
              key={complaint._id}
              className="border border-gray-200 rounded-xl p-5 flex justify-between items-center"
            >
  
              <div>
  
                <h4 className="text-xl font-semibold text-gray-800">
                  {complaint.title}
                </h4>
  
                <p className="text-gray-500 mt-1">
                  Category: {complaint.category}
                </p>
  
              </div>
  
              <span
                className={`px-4 py-2 rounded-full text-white font-medium ${
                  complaint.status === "pending"
                    ? "bg-yellow-500"
                    : complaint.status === "in-progress"
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
              >
                {complaint.status
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </span>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
    </div>
  );
}

export default Dashboard