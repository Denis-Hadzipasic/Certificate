import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import Sidebar from "./Sidebar";
import { AuthContext } from "../context/AuthProvider";

export default function SearchDatabase() {
  const { rangeList } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("internNumber") || "";
  const searchQueryManufacturer = queryParams.get("manufacturerNumber") || "";

  useEffect(() => {
    if (searchQuery || searchQueryManufacturer) {
      axiosClient
        .get(
          `product/searchProduct?internNumber=${searchQuery}&manufacturerNumber=${searchQueryManufacturer}`
        )
        .then((response) => setProducts(response.data))
        .catch((error) => console.error(error));
    }
  }, [searchQuery, searchQueryManufacturer]);

  return (
    <div>
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div id="main-content" className="h-[92vh] w-full bg-gray-50">
          <main>
            <div className="bg-gray-50 relative overflow-y-auto lg:ml-64">
              <h2 className="text-lg font-semibold text-gray-600 my-6 ml-6">
                Suchergebnisse:
              </h2>
              <div className="mt-6 w-full overflow-x-auto">
                {products.length > 0 ? (
                  <table className="mx-auto w-11/12 min-w-[640px] table-auto border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 border border-gray-300">
                          Interne Fl.-Nr.
                        </th>
                        <th className="px-6 py-3 border border-gray-300">
                          Hersteller Fl.-Nr.
                        </th>
                        <th className="px-6 py-3 border border-gray-300">
                          Hersteller
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product._id}
                          className="text-center border border-gray-300"
                        >
                          <td>{product.internNumber}</td>
                          <td>{product.manufacturerNumber}</td>
                          <td>{product.manufacturer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    Keine Produkte gefunden
                  </p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
