import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";

export default function Home() {
  const { login, user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="pt-28 h-fit bg-gray-50 relative overflow-y-auto lg:ml-64">
        <div className="flex justify-center items-center h-1/5 bg-cover bg-center ml-auto mr-auto lg:w-1/12 mt-16 mb-4">
          <img src={logo} alt="logo" />
        </div>

        <section>
          <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
