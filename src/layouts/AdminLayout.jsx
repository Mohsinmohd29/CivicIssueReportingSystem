import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="lg:ml-64">

        <div className="lg:hidden sticky top-0 z-30 bg-white shadow px-5 py-4 flex items-center">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
          >
            <FaBars />
          </button>

          <h1 className="ml-4 font-bold text-lg">
            Civic Admin
          </h1>

        </div>

        <div className="p-6 lg:p-8">
          {children}
        </div>

      </main>

    </div>
  );
};

export default AdminLayout;