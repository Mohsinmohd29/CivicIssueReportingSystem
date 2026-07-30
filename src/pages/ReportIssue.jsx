import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../services/complaintService";
import { toast } from "react-toastify";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function ReportIssue() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("location", formData.location);

      // Temporary coordinates
      data.append("latitude", latitude);
      data.append("longitude", longitude);

      if (image) {
        data.append("image", image);
      }

      await createComplaint(data);

      toast.success("Complaint submitted successfully!");

      setFormData({
        title: "",
        description: "",
        category: "",
        location: "",
      });

      setImage(null);

      navigate("/my-complaints");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Error submitting complaint"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        toast.error("Please allow location access.");
      }
    );
  }, []);

  return (
    <div className="py-2">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-blue-700 mb-3 text-center">
          Report Civic Issue
        </h2>

        <p className="text-gray-600 text-center mb-10">
          Help improve your locality by reporting public issues.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Issue Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter issue title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option>Garbage</option>
              <option>Pothole</option>
              <option>Street Light</option>
              <option>Water Leakage</option>
              <option>Drainage</option>
              <option>Road Damage</option>
              <option>Others</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter issue location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Live Map */}

          {latitude && longitude && (
            <div>
              <label className="block text-lg font-semibold mb-2">
                Current Location
              </label>

              <MapContainer
                center={[latitude, longitude]}
                zoom={16}
                scrollWheelZoom={false}
                className="h-72 w-full rounded-xl"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[latitude, longitude]} />
              </MapContainer>

              <p className="text-sm text-gray-500 mt-2">
                Latitude: {latitude.toFixed(6)} <br />
                Longitude: {longitude.toFixed(6)}
              </p>
            </div>
          )}

          {/* Upload Image */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
              required
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;