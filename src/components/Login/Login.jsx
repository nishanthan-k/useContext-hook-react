// Login.jsx
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Account from "../Account/Account";
import Header from "../Header/Header";
import { UserContext } from "../Login/Login";

const Login = () => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName }}>
      <div className="login">
        <NavBar />
        <Routes>
          {/* Other routes can be added here if needed */}
          <Route path="/header" element={<Header />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default Login;
