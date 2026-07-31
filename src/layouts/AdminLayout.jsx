import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 overflow-y-auto">

        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-md p-4 flex items-center">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
          >
            <FaBars />
          </button>

          <h1 className="ml-4 text-xl font-bold">
            Civic Admin
          </h1>

        </div>

        <div className="px-6 py-6 lg:px-12 lg:py-10">
          {children}
        </div>

      </main>

    </div>
  );
};

export default AdminLayout;