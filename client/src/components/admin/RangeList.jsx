import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";
import RangeListCard from "./RangeListCard";

export default function RangeList() {
  const {
    rangeList,
    user,
    setInternNumber,
    setManufacturerNumber,
    setSearched,
  } = useContext(AuthContext);

  useEffect(() => {
    setInternNumber("");
    setManufacturerNumber("");
    setSearched(false);
  }, []);


  

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
            <div className="pt-4 pb-6 px-4">
              <div className="w-full">
                <div className="mt-4  bg-white p-4 shadow rounded-lg h-[calc(90vh-32px)] mx-auto">
                  <div className="flex justify-between">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">
                      Nummernkreise:
                    </h2>
                    <NavLink
                      to={"/admin/newCertificateRange"}
                      className={
                        user.role && user.role !== "user"
                          ? "mb-2 btn w-48 bg-green-600 text-white hover:bg-green-700"
                          : "hidden"
                      }
                    >
                      Neuer Nummernkreis
                    </NavLink>
                  </div>

                  <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-px mb-6"></div>

                  <div className="mx-auto px-4 mb-4 grid grid-cols-1 gap-6">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                      <div className="p-6 h-[calc(78.5vh-32px)] overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-6 w-[250px] py-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                                Interner Nummernkreis:
                              </th>
                              <th className="px-6 w-[250px] py-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                                Hersteller Nummernkreis:
                              </th>
                              <th className="px-6 w-[300px] py-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                                Internes Zertifikat
                              </th>
                              <th className="px-6 w-[300px] py-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                                Herstellerzertifikat
                              </th>
                              {user && user.role !== "user" ? (
                                <th className="px-6 w-[200px] py-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                                  Verwalten
                                </th>
                              ) : (
                                <></>
                              )}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {rangeList?.map((range) => {
                              return (
                                <RangeListCard key={range._id} range={range} />
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
