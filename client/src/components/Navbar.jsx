import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logoNav from "../assets/logoNav.png";

export default function Navbar() {
  const { isLoading, user, logout } = useContext(AuthContext);

  console.log(user)

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      {!isLoading && (
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <NavLink
                to={user?.role === "admin" ? "/admin/productList" : user?.role === "user" ? "/user/search" : user?.role === null ? "/" : "/"}
                className="font-medium flex items-center lg:ml-2.5"
              >
                <img src={logoNav} className="h-14 mr-2" alt="logo" />
                <div className="flex flex-col">
                  <span className="font-anek text-xl self-center whitespace-nowrap">
                    Flaschenzertifikate
                  </span>
                  <span className="font-anek self-center whitespace-nowrap">
                    Standort München
                  </span>
                </div>
              </NavLink>
              <div className="hidden lg:block lg:pl-20">
                <div
                  className={
                    window.location.pathname === "/kennzahlen/meineAntraege"
                      ? "mt-1 relative lg:w-72"
                      : "hidden"
                  }
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="topbar-search"
                    className="visible bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Suchen"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {!user ? (
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    viewBox="0 0 48 48"
                    className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                  >
                    <g fill="currentColor">
                      <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></path>
                      <path
                        fillRule="evenodd"
                        d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </NavLink>
              ) : (
                <span
                  onClick={() => logout()}
                  className="group flex font-medium items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="group-hover:text-gray-700 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"
                      color="currentColor"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
