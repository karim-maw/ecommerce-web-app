import { Route, Routes } from "react-router-dom";
import AdminHome from "./pages/adminhome/AdminHome";
import Login from "./pages/auth/Login";
import Create from "./pages/crud/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/home/options" element={<AdminHome />} />
        <Route path="/admin/home/options/crud/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
