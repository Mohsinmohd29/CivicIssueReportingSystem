import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import {
    FaShieldAlt,
    FaChartBar,
    FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
    const { user,setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        navigate("/", { replace: true });

        setTimeout(() => {
            localStorage.removeItem("token");
            setUser(null);
        }, 100);
    };

    return (
        <aside className="w-56 h-screen bg-white border-r border-gray-200 flex flex-col flex-shrink-0">

            {/* Header */}

            <div className="px-6 py-6 border-b border-gray-200">

                <h1 className="text-2xl font-bold text-gray-800">
                    Civic Admin
                </h1>

                <p className="text-sm text-gray-500">
                    Admin Panel
                </p>

                <div className="mt-5 flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">

                        {user?.name?.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h3 className="font-semibold text-gray-800">
                            {user?.name}
                        </h3>

                        <p className="text-sm text-gray-500 capitalize">
                            {user?.role}
                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <nav className="flex-1 p-4">

                <button
                    onClick={() => navigate("/admin")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition
          ${location.pathname === "/admin"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                >

                    <FaChartBar />

                    Dashboard

                </button>

            </nav>

            {/* Logout */}

            <div className="p-4 border-t">

                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </aside>
    );
};

export default AdminSidebar;