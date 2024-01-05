// Account.jsx
import  { useContext } from "react";
import { UserContext } from "../Login/Login";

const Account = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h1>Account - Current user is: {userName}</h1>
    </div>
  );
};

export default Account;
