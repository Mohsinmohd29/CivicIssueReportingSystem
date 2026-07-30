import { useEffect, useState } from "react";
import {
  getAllComplaints,
  updateComplaintStatus,
} from "../services/complaintService";
import { toast } from "react-toastify";

import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // ==========================
  // Statistics
  // ==========================

  const total = complaints.length;

  const pending = complaints.filter(
    (c) => c.status === "pending"
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "in-progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "resolved"
  ).length;

  // ==========================
  // Fetch Complaints
  // ==========================

  const fetchComplaints = async () => {

    try {

      setLoading(true);

      const data = await getAllComplaints();

      setComplaints(data.complaints);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to fetch complaints"
      );

    } finally {

      setLoading(false);

    }

  };

  // ==========================
  // Update Status
  // ==========================

  const updateStatus = async (id, status) => {

    try {

      await updateComplaintStatus(id, status);

      setComplaints((prev) =>
        prev.map((complaint) =>
          complaint._id === id
            ? { ...complaint, status }
            : complaint
        )
      );

      toast.success("Complaint updated successfully");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to update complaint"
      );

    }

  };

  // ==========================
  // Load
  // ==========================

  useEffect(() => {

    fetchComplaints();

  }, []);

  // ==========================
  // Search + Filter
  // ==========================

  const filteredComplaints = complaints.filter((complaint) => {

    const searchMatch =
      complaint.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      complaint.category
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      complaint.location
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      complaint.user?.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "all" ||
      complaint.status === statusFilter;

    return searchMatch && statusMatch;

  });

  if (loading) {

    return (

      <div className="flex justify-center items-center min-h-screen">

        <div className="text-xl font-semibold">

          Loading Dashboard...

        </div>

      </div>

    );

  }

  return (
    <div className="space-y-8">

      {/* ================= HERO SECTION ================= */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <h1 className="text-5xl font-bold">
              Welcome back, Admin 👋
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              Manage and monitor every reported civic issue from one place.
            </p>

          </div>

          <div className="w-full lg:w-[420px]">

            <div className="relative">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search complaints..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl text-gray-700 bg-white outline-none shadow-md"
              />

            </div>

            <div className="flex gap-3 mt-5 overflow-x-auto whitespace-nowrap scrollbar-hide">

              {[
                "all",
                "pending",
                "in-progress",
                "resolved",
              ].map((status) => (

                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full font-medium transition
                    ${statusFilter === status
                      ? "bg-white text-blue-700 shadow"
                      : "bg-blue-500/40 hover:bg-blue-500 text-white"
                    }`}
                >

                  {status
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}

                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Total Complaints
              </p>

              <h2 className="text-5xl font-bold mt-3 text-blue-600">
                {total}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <FaClipboardList
                size={28}
                className="text-blue-600"
              />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Pending
              </p>

              <h2 className="text-5xl font-bold mt-3 text-yellow-500">
                {pending}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">

              <FaClock
                size={28}
                className="text-yellow-600"
              />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                In Progress
              </p>

              <h2 className="text-5xl font-bold mt-3 text-blue-500">
                {inProgress}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <FaSpinner
                size={28}
                className="text-blue-600"
              />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Resolved
              </p>

              <h2 className="text-5xl font-bold mt-3 text-green-600">
                {resolved}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

              <FaCheckCircle
                size={28}
                className="text-green-600"
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Complaint Management
            </h2>

            <p className="text-gray-500 mt-2">
              Showing {filteredComplaints.length} complaint(s)
            </p>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-5">Image</th>
                <th className="pb-5">Title</th>
                <th className="pb-5">Category</th>
                <th className="pb-5">Location</th>
                <th className="pb-5">Status</th>
                <th className="pb-5">Update</th>
                <th className="pb-5">Reported By</th>

              </tr>

            </thead>

            <tbody>

              {filteredComplaints.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="py-12 text-center text-gray-500"
                  >

                    No complaints found.

                  </td>

                </tr>

              ) : (

                filteredComplaints.map((complaint) => (

                  <tr
                    key={complaint._id}
                    onClick={() =>
                      navigate(`/admin/complaints/${complaint._id}`)
                    }
                    className="border-b hover:bg-gray-50 transition cursor-pointer"
                  >

                    <td className="py-5">

                      <img
                        src={complaint.image}
                        alt={complaint.title}
                        className="w-24 h-24 rounded-xl object-cover shadow"
                      />

                    </td>

                    <td className="font-semibold">
                      {complaint.title}
                    </td>

                    <td>{complaint.category}</td>

                    <td>{complaint.location}</td>

                    <td>

                      <span
                        className={`px-4 py-2 rounded-full text-white text-sm font-semibold
  
                        ${complaint.status === "pending"
                            ? "bg-yellow-500"

                            : complaint.status === "in-progress"

                              ? "bg-blue-600"

                              : "bg-green-600"
                          }`}
                      >

                        {complaint.status
                          .replace("-", " ")
                          .replace(/\b\w/g, (c) =>
                            c.toUpperCase()
                          )}

                      </span>

                    </td>

                    <td>

                      <select
                        value={complaint.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          updateStatus(
                            complaint._id,
                            e.target.value
                          )
                        }
                        className="border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                      >

                        <option value="pending">
                          Pending
                        </option>

                        <option value="in-progress">
                          In Progress
                        </option>

                        <option value="resolved">
                          Resolved
                        </option>

                      </select>

                    </td>

                    <td className="font-medium">

                      {complaint.user?.name}

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
export default AdminDashboard