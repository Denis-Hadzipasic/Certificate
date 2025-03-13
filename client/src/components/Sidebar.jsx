import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-72 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 mt-2 px-2 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <NavLink
                  to={"/admin/newProduct"}
                  className="text-[14px] text-gray-900 font-semibold rounded-lg flex items-center p-2 hover:bg-gray-100 group"
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
                  to={"/admin/dashboardKennzahlen"}
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
          </div>
        </div>
      </div>
    </aside>
  );
}
