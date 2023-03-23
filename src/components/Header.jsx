import { NavLink } from "react-router-dom";
import { useAuth } from "./Context";

export const Header = () => {
  const auth = useAuth();

  return (
    <>
      <div className="header">
        <div className="header-heading">
          <h1>React Router</h1>
        </div>
        <div className="header-links">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {!auth.user && <NavLink to="/login">Login</NavLink>}
          </nav>
        </div>
      </div>
    </>
  );
};
