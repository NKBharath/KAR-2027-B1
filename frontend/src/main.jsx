import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Pages/JSX/Login.jsx";
import ShowStudent from "./Pages/JSX/ShowStudent.jsx";
import AddStudent from "./Pages/JSX/AddStudent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateStudent from "./Pages/JSX/UpdateStudent.jsx";
import DeleteStudent from "./Pages/JSX/DeleteStudent.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/show-student" element={<ShowStudent />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/update-student" element={<UpdateStudent />} />
      <Route path="/delete-student" element={<DeleteStudent />} />
    </Routes>
  </BrowserRouter>,
);
