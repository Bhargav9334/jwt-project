import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>JWT Dashboard</h2>

      <div className="nav-right">
        <span>
          {user?.name}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;