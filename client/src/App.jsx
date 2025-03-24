import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Authorize from "./utils/Authorize";
import Protected from "./utils/Protected";
import CreateProduct from "./components/admin/CreateProduct";
import ProductList from "./components/admin/ProductList";
import EditProduct from "./components/admin/EditProduct";
import RangeList from "./components/admin/RangeList";
import EditRange from "./components/admin/EditRange";
import SearchDatabase from "./components/SearchDatabase";
import AuthorizeUser from "./utils/AuthorizeUser";
import Forbidden from "./components/Forbidden";
import CreateRange from "./components/admin/CreateRange";

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
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/forbidden" element={<Forbidden />} />

        <Route path="/" element={<Protected />}>
          <Route path="/user" element={<AuthorizeUser role="user" />}>
            <Route path="productList" element={<ProductList />} />
            <Route path="searchDatabase" element={<SearchDatabase />} />
            <Route path="rangeList" element={<RangeList />} />
          </Route>
        </Route>

        <Route path="/" element={<Protected />}>
          <Route path="/admin" element={<Authorize role="admin" />}>
            <Route path="newProduct" element={<CreateProduct />} />
            <Route path="searchDatabase" element={<SearchDatabase />} />
            <Route path="editProduct/:id" element={<EditProduct />} />
            <Route path="productList" element={<ProductList />} />
            <Route
              path="newCertificateRange"
              element={<CreateRange />}
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
