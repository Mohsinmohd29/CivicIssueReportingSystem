import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      <AdminSidebar />

      <main className="flex-1 overflow-y-auto px-12 py-10">
        {children}
      </main>

    </div>
  );
};

export default AdminLayout;