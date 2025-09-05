import { Navigate, Outlet } from "react-router-dom";



const PublicRoute = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        // agar already login → homepage/dashboard pe redirect
        return <Navigate to="/" replace />;
    }

    return <Outlet />; // render login/signup pages
};

export default PublicRoute;