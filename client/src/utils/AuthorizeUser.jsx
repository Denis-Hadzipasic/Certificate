import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function AuthorizeUser({ role }) {
  const { user } = useContext(AuthContext);

  return <>{user.role === role ? <Outlet /> : <Navigate to={"/admin/productList"} />}</>;
}
