// NavBar.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Login/Login";

const NavBar = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <Link to="/header">Header</Link>
      <Link to="/account">Account</Link>
      <div>
        Current user is: {userName}
      </div>
    </div>
  );
};

export default NavBar;
