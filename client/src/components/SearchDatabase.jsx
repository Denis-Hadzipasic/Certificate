import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";
import axiosClient from "../utils/axiosClient";
import Sidebar from "./Sidebar";

export default function SearchDatabase() {
  const { login, user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryManufacturer, setSearchQueryManufacturer] = useState("");

  const navigate = useNavigate();

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
                <div className="flex justify-center items-center h-1/5 bg-cover bg-center ml-auto mr-auto lg:w-1/12 mt-16 mb-4">
                  <img src={logo} alt="logo" />
                </div>
                <section>
                  <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-10">
                      {/* Input Fields with Labels */}
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

                      {/* Centered Button */}
                      <div className="flex justify-center mt-6">
                        <button
                          onClick={handleSearch}
                          className="w-48 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700"
                        >
                          Suchen
                        </button>
                      </div>
                    </div>

                    <div className="mt-6">
                      {products.length > 0 ? (
                        products.map((product) => (
                          <div
                            key={product._id}
                            className="border rounded-md p-4 shadow-md cursor-pointer"
                            onClick={() => viewProductDetails(product._id)}
                          >
                            <h3 className="font-bold">
                              Hersteller: {product.manufacturer}
                            </h3>
                            <p>
                              Interne Flaschennummer: {product.internNumber}
                            </p>
                            <p>
                              Hersteller Flaschennummer:{" "}
                              {product.manufacturerNumber}
                            </p>
                            <p></p>
                            <p>Info: {product.info}</p>
                          </div>
                        ))
                      ) : (
                        <p>No products found</p>
                      )}
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
