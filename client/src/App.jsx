import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Authorize from "./utils/Authorize";
import Protected from "./utils/Protected";
import CreateProduct from "./components/admin/CreateProduct";
import ProductList from "./components/admin/ProductList";
import EditProduct from "./components/admin/EditProduct";
import RangeList from "./components/admin/RangeList";
import EditRange from "./components/admin/EditRange";
import CreateCertificateRange from "./components/admin/CreateRange";

function App() {
  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/" element={<Protected />}>
          <Route path="/admin" element={<Authorize role="admin" />}>
            <Route path="newProduct" element={<CreateProduct />} />
            <Route path="editProduct/:id" element={<EditProduct />} />
            <Route path="productList" element={<ProductList />} />
            <Route
              path="newCertificateRange"
              element={<CreateCertificateRange />}
            />
            <Route path="editCertificateRange/:id" element={<EditRange />} />
            <Route path="rangeList" element={<RangeList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
