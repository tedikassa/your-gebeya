import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // no token → redirect to login
  if (!token) return <Navigate to="/auth" replace />;

  // token expired → clear storage & redirect to login
  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return <Navigate to="/auth" replace />;
    }
  } catch (error) {
    console.log(error);
    return <Navigate to="/auth" replace />;
  }

  // ✅ Role-based redirect
  if (user.Role === "merchant") {
    // Merchant should always go to dashboard root
    if (window.location.pathname.startsWith("/dashboard")) {
      // already in dashboard → render children
      return <Outlet />;
    }
    return <Navigate to="/dashboard" replace />;
  } else {
    // Normal user should always go to /
    if (window.location.pathname === "/") {
      return <Outlet />;
    }
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
