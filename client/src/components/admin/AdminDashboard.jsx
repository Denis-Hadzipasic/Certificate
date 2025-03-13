import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../Sidebar";

export default function AdminDashboard() {
  const {
    user
  } = useContext(AuthContext);



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
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-52"
        >
          <main>
            <div className="py-6 px-4">
              <div className="mb-4 mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <h3 className="mb-2 px-2 text-base font-semibold text-gray-500">
                        Budget:
                      </h3>

                      <div className="invisible flex items-center text-green-500 text-base font-bold mt-2">
                        14.6%
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-left">
                      <h3 className="mb-2 text-base font-semibold text-gray-500">
                        Bisher genehmigt:
                      </h3>
                      {/* <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        {`${totalAmount.toLocaleString("de-DE")},${
                          totalAmountCents === 0
                            ? "00"
                            : totalAmountCents.toString().padStart(2, "0")
                        }€`}
                      </span> */}
                      {/* <div
                        className={`${
                          differenceInEuros >= 0
                            ? "flex items-center text-green-500 text-base font-bold mt-2"
                            : "flex items-center text-red-500 text-base font-bold mt-2"
                        }`}
                      >
                        {`${differenceInEuros.toLocaleString("de-DE", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}€`}

                        {differenceInEuros >= 0 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            />
                          </svg>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <h3 className="mb-2 text-base font-semibold text-gray-500">
                        Anfragen in 
                      </h3>
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      </span>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-end text-base font-bold">
                      <div className="flex items-center">
                        <span className="text-base font-semibold text-gray-500 mr-2 ">
                          Noch öffen:
                        </span>
                        <span className="text-green-500">
                     
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 ml-2 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                          />
                        </svg>
                      </div>

                      <div className="flex items-center mt-1">
                        <span className="text-base font-semibold text-gray-500 mr-2">
                          Abgeschlossen:
                        </span>
                        <span className="text-blue-500">
                    
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 ml-2 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 11.625h4.5m-4.5 2.25h4.5m2.121 1.527c-1.171 1.464-3.07 1.464-4.242 0-1.172-1.465-1.172-3.84 0-5.304 1.171-1.464 3.07-1.464 4.242 0M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-base font-semibold text-gray-500 mr-2">
                          Abgelehnt:
                        </span>
                        <span className="text-red-500">
                   
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 ml-2 text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <h3 className="mb-2 text-base font-semibold text-gray-500">
                        Budget 
                      </h3>
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
            
                      </span>
                      <div className="invisible flex items-center text-green-500 text-base font-bold mt-2">
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-left">
                      <h3 className="mb-2 text-base font-semibold text-gray-500">
                        Bisher genehmigt:
                      </h3>
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
   
                      </span>
                      {/* <div
                        className={`${
                          differenceInEurosForYear >= 0
                            ? "flex items-center text-green-500 text-base font-bold mt-2"
                            : "flex items-center text-red-500 text-base font-bold mt-2"
                        }`}
                      >
                        {`${differenceInEurosForYear.toLocaleString("de-DE", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}€`}

                        {differenceInEurosForYear >= 0 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            />
                          </svg>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex items-center">


                    </div>
                  </div>

                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Monatsübersicht 
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Monat
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Budget
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Bisher genehmigt
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Restbetrag
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                      
                            </tbody>
                          </table>
                        </div>
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
