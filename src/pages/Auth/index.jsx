import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

const Auth = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  if (isAuth) return navigate("/");
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Auth;
