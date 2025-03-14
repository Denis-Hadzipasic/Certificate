import axiosClient from "../../utils/axiosClient";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateCertificateRange() {
  const { setRangeList } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosClient
      .post("/range/createRange", data)
      .then((response) => {
        return axiosClient.get("/range/getAllRanges");
      })
      .then((response) => {
        setRangeList(response.data);
        toast.success("Nummernkreis erstellt!");
        navigate("/admin/rangeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div className="pt-24 h-[90vh] w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <div className="shadow rounded-lg px-12 py-8 mx-auto w-full max-w-[750px] bg-white">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Neuen Nummernkreis in die Datenbank eintragen:
            </h1>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="rangeStart"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Linde Fl.-Nr. von:
                    </label>
                    <input
                      {...register("rangeStart", { required: true })}
                      type="text"
                      name="rangeStart"
                      id="rangeStart"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Linde-Flaschennummer"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="rangeEnd"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Linde Fl.-Nr. von:
                    </label>
                    <input
                      {...register("rangeEnd", { required: true })}
                      type="text"
                      name="rangeEnd"
                      id="rangeEnd"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Hersteller-Flaschennummer"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="manufacturerRangeStart"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Hersteller Fl.-Nr. von:
                    </label>
                    <input
                      {...register("manufacturerRangeStart", {
                        required: true,
                      })}
                      type="text"
                      name="manufacturerRangeStart"
                      id="manufacturerRangeStart"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Linde-Flaschennummer"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="manufacturerRangeEnd"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Hersteller Fl.-Nr. bis:
                    </label>
                    <input
                      {...register("manufacturerRangeEnd", {
                        required: true,
                      })}
                      type="text"
                      name="manufacturerRangeEnd"
                      id="manufacturerRangeEnd"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Hersteller-Flaschennummer"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-5">
                  <label
                    htmlFor="manufacturer"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Zertifikat:
                  </label>
                  <input
                    {...register("manufacturer")}
                    type="text"
                    name="manufacturer"
                    id="manufacturer"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="Geben Sie den Namen des Herstellers ein"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-gradient-to-b from-gray-700 to-gray-900 text-lg font-medium p-2 mt-2 md:pd-2 text-white uppercase w-48 rounded cursor-pointer hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  ÜBERMITTELN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
