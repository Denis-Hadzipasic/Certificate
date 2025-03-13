import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Authorize({ role }) {
  const { user } = useContext(AuthContext);

  console.log(role)

  return <>{user.role === role ? <Outlet /> : <Navigate to={"/"} />}</>;
}
