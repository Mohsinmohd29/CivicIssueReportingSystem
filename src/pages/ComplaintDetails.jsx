import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getComplaintById } from "../services/complaintService";
import { toast } from "react-toastify";
import {
  updateComplaintStatus,
  deleteComplaint,
} from "../services/complaintService";
import ConfirmModal from "../components/ConfirmModal";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function ComplaintDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleStatusUpdate = async () => {

    try {

      setSaving(true);

      await updateComplaintStatus(
        complaint._id,
        status
      );

      toast.success("Complaint updated");

      setComplaint((prev) => ({
        ...prev,
        status,
      }));

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Update failed"
      );

    } finally {

      setSaving(false);

    }

  };

  const handleDelete = async () => {
    try {

      await deleteComplaint(complaint._id);

      toast.success("Complaint deleted successfully");

      setShowDeleteModal(false);

      navigate("/admin");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Delete failed"
      );

    }
  };

  useEffect(() => {

    const fetchComplaint = async () => {

      try {

        const data = await getComplaintById(id);

        setComplaint(data.complaint);
        setStatus(data.complaint.status);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to fetch complaint"
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
        onClick={() => navigate("/admin")}
        className="mb-8 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to Dashboard
      </button>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Image */}

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

            <div className="flex flex-col items-end gap-4">

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-xl px-4 py-3"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>

            </div>
            <div className="flex gap-4 mt-8">

              <button
                onClick={handleStatusUpdate}
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                {saving ? "Saving..." : "Save Status"}
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700"
              >
                Delete Complaint
              </button>

            </div>

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

              <h3 className="text-gray-500 text-sm">
                Category
              </h3>

              <p className="text-xl font-semibold mt-2">
                {complaint.category}
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6">

              <h3 className="text-gray-500 text-sm">
                Location
              </h3>

              <p className="text-xl font-semibold mt-2">
                {complaint.location}
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6">

              <h3 className="text-gray-500 text-sm">
                Reported By
              </h3>

              <p className="text-xl font-semibold mt-2">
                {complaint.user?.name}
              </p>

              <p className="text-gray-500 mt-1">
                {complaint.user?.email}
              </p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6">

              <h3 className="text-gray-500 text-sm">
                Reported On
              </h3>

              <p className="text-xl font-semibold mt-2">
                {new Date(
                  complaint.createdAt
                ).toLocaleString()}
              </p>

            </div>

          </div>
          {/* Complaint Location Map */}

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

              <div className="mt-4 text-gray-600">
                <p>
                  <strong>Latitude:</strong>{" "}
                  {complaint.latitude.toFixed(6)}
                </p>

                <p>
                  <strong>Longitude:</strong>{" "}
                  {complaint.longitude.toFixed(6)}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Complaint?"
        message="This action cannot be undone. Are you sure you want to permanently delete this complaint?"
        confirmText="Delete"
        cancelText="Cancel"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />

    </div>

  );

}

export default ComplaintDetails;