import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserShield,
  FaCheckCircle,
  FaEdit,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/", { replace: true });
  
    setTimeout(() => {
      localStorage.removeItem("token");
      setUser(null);
    }, 100);
  };

  return (
    <div className="max-w-5xl mx-auto">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account information.
        </p>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold shadow-lg">

            {user?.name?.charAt(0).toUpperCase()}

          </div>

          <h2 className="text-3xl font-bold mt-6">

            {user?.name}

          </h2>

          <span className="mt-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium capitalize">

            {user?.role} Account

          </span>

        </div>

        {/* Information */}

        <div className="mt-12">

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">

              <FaUserCircle className="text-blue-600 text-3xl" />

              <div>

                <p className="text-gray-500 text-sm">
                  Full Name
                </p>

                <h4 className="font-semibold text-lg">
                  {user?.name}
                </h4>

              </div>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">

              <FaEnvelope className="text-blue-600 text-3xl" />

              <div>

                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h4 className="font-semibold text-lg">
                  {user?.email}
                </h4>

              </div>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">

              <FaUserShield className="text-blue-600 text-3xl" />

              <div>

                <p className="text-gray-500 text-sm">
                  Role
                </p>

                <h4 className="font-semibold text-lg capitalize">
                  {user?.role}
                </h4>

              </div>

            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">

              <FaCheckCircle className="text-green-500 text-3xl" />

              <div>

                <p className="text-gray-500 text-sm">
                  Account Status
                </p>

                <h4 className="font-semibold text-green-600">
                  Active
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-4">

          <button
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold"
          >

            <FaEdit />

            Edit Profile

          </button>

          <button
            className="flex items-center gap-3 bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-xl font-semibold"
          >

            <FaKey />

            Change Password

          </button>

          <button
            onClick={logout}
            className="ml-auto flex items-center gap-3 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;