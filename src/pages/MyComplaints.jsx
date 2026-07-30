import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMyComplaints } from "../services/complaintService";

import { toast } from "react-toastify";

function MyComplaints() {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {

    try {

      const data = await getMyComplaints();

      setComplaints(data.complaints);

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to fetch complaints"
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
        Loading complaints...
      </div>
    );
  }

  return (

    <div className="py-2 px-2">
      <div className="max-w-6xl mx-auto mb-10">

        <h2 className="text-4xl font-bold text-gray-800">
          My Complaints
        </h2>

        <p className="text-gray-600 mt-2">
          Track all your reported civic issues.
        </p>

      </div>

      {complaints.length === 0 ? (

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-12 text-center">

          <div className="text-7xl mb-6">
            📭
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            No Complaints Yet
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            You haven't reported any civic issues yet.
            <br />
            Start helping your community by reporting one now.
          </p>

          <button
            onClick={() => navigate("/report")}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Report an Issue
          </button>

        </div>

      ) : (

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {complaints.map((complaint) => (

            <div
              key={complaint._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <img
                src={complaint.image}
                alt={complaint.title}
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-800">
                  {complaint.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {complaint.description}
                </p>

                <div className="mt-5">
                  <span className="font-semibold">Category:</span>
                  <span className="ml-2 text-gray-700">
                    {complaint.category}
                  </span>
                </div>

                <div className="mt-2">
                  <span className="font-semibold">Location:</span>
                  <span className="ml-2 text-gray-700">
                    {complaint.location}
                  </span>
                </div>

                <div className="mt-2">
                  <span className="font-semibold">Reported On:</span>
                  <span className="ml-2 text-gray-700">
                    {new Date(complaint.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">

                  <span
                    className={`px-4 py-2 rounded-full text-white font-medium
      ${complaint.status === "pending"
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

                  <button
                    onClick={() => navigate(`/my-complaints/${complaint._id}`)}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    View Details
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default MyComplaints;