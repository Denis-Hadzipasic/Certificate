import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Sidebar() {
  const {user} = useContext(AuthContext)

  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-72 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 mt-2 px-2 bg-white divide-y space-y-1">
            {user?.role === "admin" ?
            <ul className="space-y-2 pb-2">
              <li>
                <NavLink
                  to={"/admin/search"}
                  className="ml-1 text-[14px] text-gray-900 font-semibold rounded-lg flex items-center p-2 hover:bg-gray-100 group"
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
                  <span className="ml-2">Suchen</span>
                </NavLink>
              </li>
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
                  <span className="ml-1">Neuer Artikel</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/admin/productList"}
                  className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 16 16"
                    className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
                  >
                    <g fill="currentColor">
                      <path
                        strokeWidth={0.2}
                        d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"
                      ></path>
                      <path
                        strokeWidth={0.2}
                        d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-3">Flaschenüberischt</span>
                </NavLink>
              </li>
              <li>
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
              <li>
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

            : 
            user?.role === "user" || user?.role === null ?
            <ul className="space-y-2 pb-2">

                            <li>
                <NavLink
                  to={"/user/search"}
                  className="ml-1 text-[14px] text-gray-900 font-semibold rounded-lg flex items-center p-2 hover:bg-gray-100 group"
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
                  <span className="ml-2">Suchen</span>
                </NavLink>
              </li>
            <li>
            <NavLink
              to={"/user/productList"}
              className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center px-4 py-2 hover:bg-gray-100 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={36}
                viewBox="0 0 16 16"
                className="stroke-gray-500 group-hover:stroke-slate-950 transition-colors duration-200"
              >
                <g fill="currentColor">
                  <path
                    strokeWidth={0.2}
                    d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"
                  ></path>
                  <path
                    strokeWidth={0.2}
                    d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                  ></path>
                </g>
              </svg>
              <span className="ml-3">Flaschenüberischt</span>
            </NavLink>
          </li>
          </ul>
 : <>Placeholder</>
            }
          </div>
        </div>
      </div>
    </aside>
  );
}
