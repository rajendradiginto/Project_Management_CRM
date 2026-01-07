import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login.jsx";
import Registration from "./components/auth/Registration";
import DashboardPage from "./Pages/Dashboard-Page.jsx";
import Profile from "./components/profile/Profile.jsx";
import { useEffect, useState } from "react";
import Landing from "./components/landing-page/Landing.jsx";
import ProtectedRoute from './components/routes/ProtectedRoute.jsx';
function App() {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // if token does not expired
      setAuthToken(true);
    }
  });
  return (
    <>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
