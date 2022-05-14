import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import { NotFound } from "./components/Common";
import { Admin } from "./components/Layout";
import { authActions } from "./features/auth/AuthSlice";
import Login from "./features/auth/pages/Login";
import cityApi from "./services/api/cityApi";

function App() {
  const isLogin = Boolean(localStorage.getItem("access_token"));
  const dispatch = useAppDispatch();

  const loginProps = isLogin
    ? { element: <Admin /> }
    : { element: <Navigate to="/login" replace /> };

  useEffect(() => {
    cityApi.getCities().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(authActions.logOut())}
      >
        Logout
      </Button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" {...loginProps} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
