import { useAuth } from "./Context";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h3>Welcome {auth.user}</h3>
      <button className="logout-buton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
