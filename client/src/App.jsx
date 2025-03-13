import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import Authorize from "./utils/Authorize";
import Protected from "./utils/Protected";
import CreateProduct from "./components/admin/CreateProduct";
import CreateCertificateRange from "./components/admin/CreateCertificateRange";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/" element={<Protected />}>
          <Route path="/admin" element={<Authorize role="admin" />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="newProduct" element={<CreateProduct />} />
            <Route path="newProduct" element={<CreateCertificateRange />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
