import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login.jsx';
import Registration from './components/auth/Registration';
import DashboardPage from './Pages/Dashboard-Page.jsx';
import Profile from './components/profile/Profile.jsx';
import ProtectedRoute from './components/routes/ProtectedRoute.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />

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
  )
}

export default App
