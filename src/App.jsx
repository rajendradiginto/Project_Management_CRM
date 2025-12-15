import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login.jsx';
import Registration from './components/auth/Registration';
import DashboardPage from './Pages/Dashboard-Page.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
