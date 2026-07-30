import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import {
  FaHome,
  FaClipboardList,
  FaExclamationCircle,
  FaUser,
  FaSignOutAlt,
  FaCity,
} from "react-icons/fa";

const Sidebar = () => {
  const { user, setUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/", { replace: true });
  
    setTimeout(() => {
      localStorage.removeItem("token");
      setUser(null);
    }, 100);
  };
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      title: "Report Issue",
      path: "/report",
      icon: <FaExclamationCircle />,
    },
    {
      title: "My Complaints",
      path: "/my-complaints",
      icon: <FaClipboardList />,
    },
    {
      title: "My Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className="w-72 h-screen sticky top-0 bg-slate-900 text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-slate-700">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

            <FaCity className="text-2xl" />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              Civic Reporter
            </h1>

            <p className="text-slate-400 text-sm">
              Smart Civic Platform
            </p>

          </div>

        </div>

      </div>

      {/* User */}
      <div className="px-8 py-8 border-b border-slate-700">

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">

            {user?.name?.charAt(0).toUpperCase()}

          </div>

          <h2 className="mt-4 text-xl font-semibold text-center">
            {user?.name}
          </h2>

          <span className="mt-2 px-4 py-1 rounded-full bg-blue-600 text-sm capitalize">

            {user?.role}

          </span>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">

        <div className="space-y-3">

          {menuItems.map((item) => {

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300
                  ${
                    active
                      ? "bg-blue-600 shadow-lg"
                      : "hover:bg-slate-800"
                  }`}
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-slate-700">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition py-4 rounded-xl font-semibold"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;