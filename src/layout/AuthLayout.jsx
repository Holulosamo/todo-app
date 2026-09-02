import { Route, Routes } from "react-router";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

export default function AuthLayout(){
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}
