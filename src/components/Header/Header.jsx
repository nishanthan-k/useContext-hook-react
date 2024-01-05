// Header.jsx
import  { useContext } from "react";
import { UserContext } from "../Login/Login";

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h1>Header - Current user is: {userName}</h1>
    </div>
  );
};

export default Header;
