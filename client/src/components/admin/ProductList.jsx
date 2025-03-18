import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../Sidebar";
import ProductListCard from "./ProductListCard";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { productList } = useContext(AuthContext);

  return (
    <div>
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-72"
        >
          <main>
            <div className="py-6 px-4">
              <div className="mb-4 mt-4 w-full">
                <div className="mt-4  bg-white p-4 shadow rounded-lg h-[calc(90vh-32px)] mx-auto">
                  <div className="flex justify-between mx-6">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">
                      Nummernkreise:
                    </h2>
                    <NavLink
                      to={"/admin/newProduct"}
                      className="mb-2 btn w-32 bg-green-600 text-white hover:bg-green-700"
                    >
                      Neuer Artikel
                    </NavLink>
                  </div>
                  <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-px mb-6"></div>

                  <div className="mx-auto px-4 mb-4 grid grid-cols-1 gap-6">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                      <div className="p-6 h-[calc(78.5vh-32px)] overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Interne Fl.-Nr.
                              </th>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Hersteller Fl.-Nr.
                              </th>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Hersteller
                              </th>
                              <th className="px-6 py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Zusätzliche Informationen
                              </th>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Internes Zertifikat
                              </th>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Herrstellerzertifikat
                              </th>

                              <th className="px-6 w-[150px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Verwalten
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {productList?.map((product) => {
                              return (
                                <ProductListCard
                                  key={product._id}
                                  product={product}
                                />
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
