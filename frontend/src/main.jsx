import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import ShowStudent from './Pages/ShowStudent.jsx'
import AddStudent from './Pages/AddStudent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/show-student" element={<ShowStudent />} />
      <Route path="/add-student" element={<AddStudent />} />
    </Routes>    
  </BrowserRouter>
)
