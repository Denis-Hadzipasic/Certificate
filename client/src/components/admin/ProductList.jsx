import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../Sidebar";
import ProductListCard from "./ProductListCard";

export default function ProductList() {
  const {
    productList,
    setInternNumber,
    setManufacturerNumber,
    searched,
    setSearched,
    internNumber,
    manufacturerNumber,
  } = useContext(AuthContext);

  useEffect(() => {
    setInternNumber("");
    setManufacturerNumber("");
    setSearched(false)

  }, []);

  const formatNumber = (num) => {
    const str = num.toString().replace(/\s/g, "");
    if (str.length === 5) {
      return `${str.slice(0, 2)} ${str.slice(2)}`;
    } else if (str.length === 6) {
      return `${str.slice(0, 3)} ${str.slice(3)}`;
    } else if (str.length === 7) {
      return `${str.slice(0, 1)} ${str.slice(1, 4)} ${str.slice(4)}`;
    }
    return str;
  };

  const handleInternNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); 
    const formattedValue = formatNumber(rawValue);
    setInternNumber(formattedValue);
    setSearched(true);

    if(formattedValue === "" && manufacturerNumber === "") {
      setSearched(false)
    }
  };

  const handleManufacturerNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); 
    const formattedValue = formatNumber(rawValue);
    setManufacturerNumber(formattedValue);
    setSearched(true);

    if(formattedValue === "" && internNumber === "") {
      setSearched(false)
    }
  };

  const setDefault = () => {
    setInternNumber("");
    setManufacturerNumber("");
    setSearched(false);
  };

  return (
    <div>
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-72"
        >
          <main>
            <div className="py-8 px-4">
              <div className="w-full">
                <div className="bg-white p-4 shadow rounded-lg h-[calc(89vh-32px)] mx-auto">
                  <div className="flex justify-between">
                    <h2 className="flex items-center text-gray-500 text-lg font-semibold pb-4">
                      Flaschenübersicht:
                    </h2>

                    <div className="w-full max-w-[600px] bg-white mb-3">
                      <div className="flex gap-4 items-end">
                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium text-[15px] mb-1">
                            Interne Flaschennummer:
                          </label>
                          <input
                            type="text"
                            placeholder={"X XXX XXX"}
                            onChange={handleInternNumberChange}
                            value={internNumber}
                            className="w-full h-[30px] py-1 px-3 border border-gray-300 rounded-md placeholder:text-[14px] placeholder:tracking-widest"
                          />
                        </div>
                        <label className="block text-gray-700 font-medium mb-1.5">
                          oder
                        </label>
                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium text-[15px] mb-1">
                            Hersteller Flaschennummer:
                          </label>
                          <input
                            type="text"
                            placeholder="X XXX XXX"
                            onChange={handleManufacturerNumberChange}
                            value={manufacturerNumber}
                            className="w-full h-[30px] py-1 px-3 border border-gray-300 rounded-md placeholder:text-[14px] placeholder:tracking-widest"
                          />
                        </div>

                        {searched ? (
                          <button
                            className="w-[45px] h-[30px] bg-amber-500 text-white text-[15px] rounded-md flex items-center justify-center gap-2 hover:bg-amber-600"
                            onClick={setDefault}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4z"></path></svg>
                          </button>
                        ) : (
                          <div className="w-[45px] h-[30px] bg-blue-500 text-white text-[15px] rounded-md flex items-center justify-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 512 512"
                              fill="currentColor"
                            >
                              <path d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-px mb-6"></div>

                  <div className="mx-auto px-4 mb-4 grid grid-cols-1 gap-6">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                      <div className="p-6 h-[calc(72.5vh-32px)] overflow-x-scroll px-0 pt-0 pb-2">
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
                                Herstellerzertifikat
                              </th>
                              <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                                Verwalten
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {productList?.map((product) => (
                              <ProductListCard
                                key={product._id}
                                product={product}
                              />
                            ))}
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
