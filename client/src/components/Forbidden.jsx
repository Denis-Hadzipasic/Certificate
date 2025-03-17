import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Forbidden() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="text-center p-6 max-w-md bg-base-100 shadow-lg rounded-xl">
        <h1 className="text-6xl font-bold text-red-900">403</h1>
        <p className="text-xl font-semibold mt-4">Zugriff verweigert</p>
        <p className="mt-2 text-gray-500">
          Sie haben keine Berechtigung, diese Seite anzuzeigen
        </p>
        <NavLink
          to={
            user?.role === "admin"
              ? "/admin/productList"
              : user?.role === "user"
              ? "/user/search"
              : user?.role === null
              ? "/"
              : "/"
          }
          className="btn btn-primary mt-4"
        >
          Zurück
        </NavLink>
      </div>
    </div>
  );
}
