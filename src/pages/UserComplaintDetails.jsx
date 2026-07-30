import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { getMyComplaintById } from "../services/complaintService";

function UserComplaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const data = await getMyComplaintById(id);
        setComplaint(data.complaint);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch complaint"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchComplaint();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Loading Complaint...
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Complaint not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">

      <button
        onClick={() => navigate("/my-complaints")}
        className="mb-8 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to My Complaints
      </button>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <img
          src={complaint.image}
          alt={complaint.title}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-10">

          <div className="flex justify-between items-start">

            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                {complaint.title}
              </h1>

              <p className="text-gray-500 mt-2">
                Complaint ID : {complaint._id}
              </p>

            </div>

            <span
              className={`px-5 py-3 rounded-full text-white font-semibold
                ${
                  complaint.status === "pending"
                    ? "bg-yellow-500"
                    : complaint.status === "in-progress"
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
            >
              {complaint.status
                .replace("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>

          </div>

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Description
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {complaint.description}
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-gray-500 text-sm">Category</h3>
              <p className="text-xl font-semibold mt-2">
                {complaint.category}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-gray-500 text-sm">Location</h3>
              <p className="text-xl font-semibold mt-2">
                {complaint.location}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-gray-500 text-sm">Reported On</h3>
              <p className="text-xl font-semibold mt-2">
                {new Date(complaint.createdAt).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-gray-500 text-sm">Current Status</h3>
              <p className="text-xl font-semibold mt-2">
                {complaint.status
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </p>
            </div>

          </div>

          {complaint.latitude && complaint.longitude && (

            <div className="mt-10">

              <h2 className="text-2xl font-semibold mb-4">
                Complaint Location
              </h2>

              <MapContainer
                center={[complaint.latitude, complaint.longitude]}
                zoom={16}
                scrollWheelZoom={false}
                className="h-80 w-full rounded-2xl shadow"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[
                    complaint.latitude,
                    complaint.longitude,
                  ]}
                />

              </MapContainer>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default UserComplaintDetails;