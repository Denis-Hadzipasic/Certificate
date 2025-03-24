import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import axiosClient from "../utils/axiosClient";
import Sidebar from "./Sidebar";
import { AuthContext } from "../context/AuthProvider";

export default function SearchDatabase() {
  const { rangeList } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryManufacturer, setSearchQueryManufacturer] = useState("");

  console.log(rangeList);
  console.log(products);

  const handleSearch = async () => {
    axiosClient
      .get(
        `product/searchProduct?internNumber=${searchQuery}&manufacturerNumber=${searchQueryManufacturer}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="flex overflow-hidden bg-white pt-16">
          <Sidebar />
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div id="main-content" className="h-[92vh] w-full bg-gray-50">
            <main>
              <div className="bg-gray-50 relative overflow-y-auto lg:ml-64">
                <div className="mt-6 w-full overflow-x-auto">
                  <table className="mx-auto w-11/12 min-w-[640px] table-auto border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Interne Fl.-Nr.
                        </th>
                        <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Hersteller Fl.-Nr.
                        </th>
                        <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Hersteller
                        </th>
                        <th className="px-6 py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Zusätzliche Informationen
                        </th>
                        <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Internes Zertifikat
                        </th>
                        <th className="px-6 w-[200px] py-3 text-[13px] font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                          Herstellerzertifikat
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.length > 0 ? (
                        products.map((product) => {
                          const matchingRange = rangeList?.find(
                            (range) =>
                              product.internNumber >= range.rangeStart &&
                              product.internNumber <= range.rangeEnd
                          );

                          const matchingManufacturerRange = rangeList.find(
                            (range) =>
                              product.manufacturerNumber >=
                                range.manufacturerRangeStart &&
                              product.manufacturerNumber <=
                                range.manufacturerRangeEnd
                          );

                          return (
                            <tr key={product._id} className="text-center">
                              <td className="px-4 py-3 border border-gray-300">
                                {product.internNumber}
                              </td>
                              <td className="px-4 py-3 border border-gray-300">
                                {product.manufacturerNumber}
                              </td>
                              <td className="px-6 py-3 border border-gray-300">
                                {product.manufacturer}
                              </td>
                              <td className="px-6 py-3 border border-gray-300">
                                {product.info || "-"}
                              </td>
                              <td className="px-6 py-3 border border-gray-300">
                                {matchingRange?.internCertificate ? (
                                  <a
                                    href={matchingRange.internCertificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                  >
                                    Intern Zertifikat
                                  </a>
                                ) : (
                                  "Kein vorhanden"
                                )}
                              </td>
                              <td className="px-6 py-3 border border-gray-300">
                                {matchingManufacturerRange?.manufacturerCertificate ? (
                                  <a
                                    href={
                                      matchingManufacturerRange.manufacturerCertificate
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                  >
                                    Hersteller Zertifikat
                                  </a>
                                ) : (
                                  "Kein vorhanden"
                                )}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center py-4">
                            Keine Produkte gefunden
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center items-center h-1/5 bg-cover bg-center ml-auto mr-auto lg:w-1/12 mt-16 mb-4">
                  <img src={logo} alt="logo" />
                </div>
                <section>
                  <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-10">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium mb-1">
                            Interne Flaschennummer:
                          </label>
                          <input
                            type="text"
                            placeholder="X XXX XXX"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium mb-1">
                            Hersteller Flaschennummer:
                          </label>
                          <input
                            type="text"
                            placeholder="X XXX XXX"
                            value={searchQueryManufacturer}
                            onChange={(e) =>
                              setSearchQueryManufacturer(e.target.value)
                            }
                            className="w-full p-3 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center mt-6">
                        <button
                          onClick={handleSearch}
                          className="w-48 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
                        >
                          Suchen
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
