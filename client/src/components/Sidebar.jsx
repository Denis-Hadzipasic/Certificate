import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-72 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 mt-2 px-2 bg-white divide-y space-y-1">
            {user?.role === "admin" ? (
              <ul className="space-y-2 pb-2">
                <li>
                  <NavLink
                    to={"/admin/newProduct"}
                    className="ml-1 text-[14px] text-gray-900 font-semibold rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                      className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={1.3}
                        d="M9 8a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v13.4a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6zm0 3h6m-3-6V2m0 0h-1m1 0h1"
                      ></path>
                    </svg>
                    <span className="ml-2">Neuer Artikel</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/productList"}
                    className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.896 20q-1.204-.006-2.447-.199t-2.333-.572t-1.91-.94Q4.384 17.73 4 17v-2.942q.346.63 1.04 1.145q.693.514 1.604.89t1.988.606t2.2.316q.053.84.325 1.59q.272.749.74 1.395m-1.006-4.529q-1.126-.087-2.219-.316q-1.093-.23-2.006-.6t-1.616-.887T4 12.52V9.558q.385.7 1.172 1.246q.788.546 1.825.928t2.256.586t2.459.228h.413q.202 0 .414-.019q-.628.57-1.055 1.316q-.428.748-.594 1.628M12 11q-3.34 0-5.68-1.021T3.98 7.5t2.34-2.479T12 4q3.346 0 5.673 1.021T20 7.5t-2.327 2.479T12 11m9.292 11l-2.661-2.642q-.454.286-.977.464T16.577 20q-1.413 0-2.418-1.005t-1.005-2.418t1.005-2.418t2.418-1.005t2.418 1.005T20 16.577q0 .554-.159 1.087q-.158.532-.503.967L22 21.292zm-4.715-3q1.012 0 1.717-.706T19 16.577t-.706-1.718q-.706-.705-1.717-.705t-1.718.706q-.705.706-.705 1.717t.705 1.717t1.718.706"
                      ></path>
                    </svg>
                    <span className="ml-3">Flaschenüberischt</span>
                  </NavLink>
                </li>
                <li className="ml-1">
                  <NavLink
                    to={"/admin/newCertificateRange"}
                    className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
                    >
                      <path
                        fill="currentColor"
                        d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2z"
                      ></path>
                    </svg>

                    <span className="ml-4">Neuer Nummernkreis</span>
                  </NavLink>
                </li>
                <li className="ml-1">
                  <NavLink
                    to={"/admin/rangeList"}
                    className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 32 32"
                      className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
                    >
                      <path
                        strokeWidth={0.3}
                        fill="currentColor"
                        d="m24 17l1.912 3.703l4.088.594L27 24l.771 4L24 25.75L20.229 28L21 24l-3-2.703l4.2-.594zM6 16h6v2H6zm0-4h10v2H6zm0-4h10v2H6z"
                      ></path>
                      <path
                        strokeWidth={0.3}
                        fill="currentColor"
                        d="M16 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12Z"
                      ></path>
                    </svg>
                    <span className="ml-3">Nummernkreise</span>
                  </NavLink>
                </li>
              </ul>
            ) : user?.role === "user" || user?.role === null ? (
              <ul className="space-y-2 pb-2">
                <li>
                  <NavLink
                    to={"/user/productList"}
                    className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.896 20q-1.204-.006-2.447-.199t-2.333-.572t-1.91-.94Q4.384 17.73 4 17v-2.942q.346.63 1.04 1.145q.693.514 1.604.89t1.988.606t2.2.316q.053.84.325 1.59q.272.749.74 1.395m-1.006-4.529q-1.126-.087-2.219-.316q-1.093-.23-2.006-.6t-1.616-.887T4 12.52V9.558q.385.7 1.172 1.246q.788.546 1.825.928t2.256.586t2.459.228h.413q.202 0 .414-.019q-.628.57-1.055 1.316q-.428.748-.594 1.628M12 11q-3.34 0-5.68-1.021T3.98 7.5t2.34-2.479T12 4q3.346 0 5.673 1.021T20 7.5t-2.327 2.479T12 11m9.292 11l-2.661-2.642q-.454.286-.977.464T16.577 20q-1.413 0-2.418-1.005t-1.005-2.418t1.005-2.418t2.418-1.005t2.418 1.005T20 16.577q0 .554-.159 1.087q-.158.532-.503.967L22 21.292zm-4.715-3q1.012 0 1.717-.706T19 16.577t-.706-1.718q-.706-.705-1.717-.705t-1.718.706q-.705.706-.705 1.717t.705 1.717t1.718.706"
                      ></path>
                    </svg>
                    <span className="ml-2">Flaschenüberischt</span>
                  </NavLink>
                </li>
                <li className="ml-1">
                  <NavLink
                    to={"/user/rangeList"}
                    className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 32 32"
                      className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
                    >
                      <path
                        strokeWidth={0.3}
                        fill="currentColor"
                        d="m24 17l1.912 3.703l4.088.594L27 24l.771 4L24 25.75L20.229 28L21 24l-3-2.703l4.2-.594zM6 16h6v2H6zm0-4h10v2H6zm0-4h10v2H6z"
                      ></path>
                      <path
                        strokeWidth={0.3}
                        fill="currentColor"
                        d="M16 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12Z"
                      ></path>
                    </svg>
                    <span className="ml-2">Nummernkreise</span>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <div className="hidden">Placeholder</div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
