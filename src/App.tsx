import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/Common";
import { Admin } from "./components/Layout";
import Login from "./features/auth/pages/Login";
import cityApi from "./services/api/cityApi";

function App() {
  const isLogin = Boolean(localStorage.getItem("access_token"));

  const loginProps = isLogin
    ? { element: <Admin /> }
    : { element: <Navigate to="/login" replace /> };

  useEffect(() => {
    cityApi.getCities().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" {...loginProps} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
