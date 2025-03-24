import axiosClient from "../../utils/axiosClient";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditRange() {
  const { setRangeList, setInternNumber, setManufacturerNumber, setSearched } =
    useContext(AuthContext);

  const [range, setRange] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setInternNumber("");
    setManufacturerNumber("");
    setSearched(false)


    axiosClient
      .get(`range/getRangeInfo/${id}`)
      .then((response) => {
        setRange(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    axiosClient
      .put(`/range/editRange/${id}`, data)
      .then((response) => {
        console.log(id);
        return axiosClient.get("/range/getAllRanges");
      })
      .then((response) => {
        setRangeList(response.data);
        toast.success("Nummernkreis aktualisiert!");
        navigate("/admin/rangeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!range ? (
        <p>Loading</p>
      ) : (
        <div className="flex overflow-hidden bg-white pt-16">
          <Sidebar />
          <div className="pt-24 h-[90vh] w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <div className="shadow rounded-lg px-12 py-8 mx-auto w-full max-w-[750px] bg-white">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Bearbeiten:
              </h1>
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="rangeStart"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Interne Fl.-Nr. von:
                      </label>
                      <input
                        {...register("rangeStart", { required: true })}
                        defaultValue={range?.rangeStart}
                        type="text"
                        name="rangeStart"
                        id="rangeStart"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        placeholder="Interne-Flaschennummer"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="rangeEnd"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Interne Fl.-Nr. von:
                      </label>
                      <input
                        {...register("rangeEnd", { required: true })}
                        defaultValue={range?.rangeEnd}
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
                        defaultValue={range?.manufacturerRangeStart}
                        type="text"
                        name="manufacturerRangeStart"
                        id="manufacturerRangeStart"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        placeholder="Interne-Flaschennummer"
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
                        defaultValue={range?.manufacturerRangeEnd}
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
                      defaultValue={range?.manufacturer}
                      type="text"
                      name="manufacturer"
                      id="manufacturer"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Geben Sie den Namen des Herstellers ein"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="bg-gradient-to-b from-gray-700 to-gray-900 text-lg font-medium p-2 mt-2 md:pd-2 text-white uppercase w-48 rounded cursor-pointer hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    ÜBERMITTELN
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="bg-gradient-to-b from-red-400 to-red-700 text-lg font-medium p-2 mt-2 md:pd-2 text-white uppercase w-48 rounded cursor-pointer hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
