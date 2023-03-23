import { useState } from "react";
import { useAuth } from "./Context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "") {
      alert("Please Enter Username");
      navigate("/");
    } else {
      auth.login(user);
      navigate("/profile", { replace: true });
    }
  };

  return (
    <>
      <div className="login-page">
        <input
          className="login-input"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <button className="login-buton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};
