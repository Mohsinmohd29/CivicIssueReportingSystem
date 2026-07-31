import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="lg:ml-72">

        {/* Mobile Navbar */}

        <div className="lg:hidden sticky top-0 z-30 bg-white shadow px-5 py-4 flex items-center">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
          >
            <FaBars />
          </button>

          <h1 className="ml-4 font-bold text-lg">
            Civic Reporter
          </h1>

        </div>

        <div className="p-6 lg:p-8">
          {children}
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;