import { Navigate, Outlet } from "react-router-dom";

// ProtectedRoute component
const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    // agar login nahi kiya → login page pe redirect
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // render child routes
};

export default ProtectedRoute;