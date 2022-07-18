import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getCurent } from "../../redux/auth/authActions";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import LoginPage from "../../views/LoginPage";
import PhonebookPage from "../../views/PhonebookPage";
import RegisterPage from "../../views/RegisterPage";
import WelcomePage from "../../views/WelcomePage";
import NavBar from "../NavBar/NavBar";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getCurent());
  }, []);

  useEffect(() => {
    isLoggedIn && navigate("/phonebook");
  }, [isLoggedIn, navigate]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" exact element={<WelcomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/phonebook" element={<PhonebookPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
