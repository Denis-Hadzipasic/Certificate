import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../utils/axiosClient";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState(null);
  const [rangeList, setRangeList] = useState(null);
  const [searched, setSearched] = useState(false);
  const [internNumber, setInternNumber] = useState("");
  const [manufacturerNumber, setManufacturerNumber] = useState("");

  useEffect(() => {
    axiosClient
      .get("/user/getUserProfile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    axiosClient
      .get(
        `/product/getAllProducts?internNumber=${internNumber}&manufacturerNumber=${manufacturerNumber}`
      )
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
        setProductList(null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    axiosClient
      .get("/range/getAllRanges")
      .then((response) => {
        setRangeList(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRangeList(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [internNumber, manufacturerNumber]);

  const login = async (data) => {
    axiosClient
      .post("/user/login", data)
      .then((response) => {
        const loggedInUser = response.data;
        setUser(loggedInUser);
        console.log(loggedInUser)

        console.log("internNumber:", internNumber, "manufacturerNumber:", manufacturerNumber);


        return Promise.all([
          axiosClient.get(`/product/getAllProducts?internNumber=${internNumber}&manufacturerNumber=${manufacturerNumber}`),
          axiosClient.get("/range/getAllRanges"),
        ]).then(([productResponse, rangeResponse]) => {
          setProductList(productResponse.data);
          setRangeList(rangeResponse.data);

          if (loggedInUser.role === "admin") {
            navigate("/admin/productList");
          } else {
            navigate("/user/productList");
          }

          console.log("Login success");
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async (data) => {
    axiosClient
      .put("/user/logout", data)
      .then((response) => {
        setUser(null);
        console.log("logged out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isLoading,
        productList,
        rangeList,
        setProductList,
        setRangeList,
        setInternNumber,
        setManufacturerNumber,
        searched,
        setSearched,
        internNumber,
        manufacturerNumber,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
