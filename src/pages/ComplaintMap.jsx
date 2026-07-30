import { useEffect, useState } from "react"

import axios from "axios"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet"

import L from "leaflet"


// FIX MARKER ICON ISSUE
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

})


function ComplaintMap() {

  const [complaints, setComplaints] = useState([])

  // FETCH COMPLAINTS
  const fetchComplaints = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/complaints"
      )

      setComplaints(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchComplaints()

  }, [])

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Heading */}
      <div className="p-6">

        <h2 className="text-4xl font-bold text-gray-800">
          Complaint Map
        </h2>

        <p className="text-gray-600 mt-2">
          View all reported civic issues on map.
        </p>

      </div>

      {/* Map */}
      <div className="px-6 pb-10">

        <MapContainer
          center={[23.2599, 77.4126]}
          zoom={12}
          style={{
            height: "80vh",
            width: "100%",
            borderRadius: "20px",
          }}
        >

          {/* OpenStreetMap Tiles */}
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Complaint Markers */}
          {complaints.map((complaint) => (

            <Marker
              key={complaint._id}

              // TEMPORARY RANDOM LOCATIONS
              position={[
                23.2599 + Math.random() * 0.05,
                77.4126 + Math.random() * 0.05,
              ]}
            >

              <Popup>

                <div className="w-[200px]">

                  {/* Image */}
                  <img
                    src={`http://localhost:5000/${complaint.image}`}
                    alt="issue"
                    className="w-full h-[120px] object-cover rounded-lg"
                  />

                  {/* Title */}
                  <h3 className="font-bold text-lg mt-3">
                    {complaint.title}
                  </h3>

                  {/* Category */}
                  <p className="text-sm text-gray-600 mt-1">
                    {complaint.category}
                  </p>

                  {/* Location */}
                  <p className="text-sm text-gray-600">
                    {complaint.location}
                  </p>

                  {/* Status */}
                  <div className="mt-3">

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm

                      ${complaint.status === "Pending"
                        ? "bg-yellow-500"
                        : complaint.status === "In Progress"
                        ? "bg-blue-600"
                        : "bg-green-600"
                      }`}
                    >
                      {complaint.status}
                    </span>

                  </div>

                </div>

              </Popup>

            </Marker>

          ))}

        </MapContainer>

      </div>

    </div>
  )
}

export default ComplaintMap