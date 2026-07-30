import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ReportIssue from "./pages/ReportIssue"
import AdminDashboard from "./pages/AdminDashboard"
import MyComplaints from "./pages/MyComplaints"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";
import ComplaintDetails from "./pages/ComplaintDetails";
import UserComplaintDetails from "./pages/UserComplaintDetails";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/report"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ReportIssue />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-complaints"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <MyComplaints />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints/:id"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminLayout>
              <ComplaintDetails />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-complaints/:id"
        element={
          <ProtectedRoute>
            <UserComplaintDetails />
          </ProtectedRoute>
        }
      />

    </Routes>

  )
}

export default App