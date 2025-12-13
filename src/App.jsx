import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/login.jsx'
import Registration from './components/auth/Registration'
import Dashboard from './components/dashboard/Dashboard.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
