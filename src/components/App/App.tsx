import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "../ProtectetRoute/ProtectedRoute";
import { MainContainer, Wrapper } from "./App.styled";
import { useAppSelector } from "../../hooks/hooks";
import { TailSpin } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = React.lazy(() => import("../../pages/RegisterPage"));
const NavBar = React.lazy(() => import("../NavBar/NavBar"));
const LoginPage = React.lazy(() => import("../../pages/LoginPage"));
const ContactsPage = React.lazy(() => import("../../pages/ContactsPage"));

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLogedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/contacts");
  }, [isLoggedIn, navigate]);

  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Suspense
          fallback={<TailSpin color="#00BFFF" height={80} width={80} />}
        >
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reg" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<Navigate replace to={"/contacts"} />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </Wrapper>
  );
}

export default App;
