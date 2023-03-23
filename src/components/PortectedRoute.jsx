import { Navigate } from "react-router-dom";
import { useAuth } from "./Context";

export const PortectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};
