import axiosClient from "../../utils/axiosClient";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosClient
      .post("/product/createProduct", data)
      .then((response) => {
        console.log("Created");
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
              Neue Flasche in die Datenbank eintragen:
            </h1>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="internNumber"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Linde Fl.-Nr.
                    </label>
                    <input
                      {...register("internNumber", { required: true })}
                      type="text"
                      name="internNumber"
                      id="internNumber"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Linde-Flaschennummer"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="manufacturerNumber"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Hersteller Fl.-Nr.
                    </label>
                    <input
                      {...register("manufacturerNumber", { required: true })}
                      type="text"
                      name="manufacturerNumber"
                      id="manufacturerNumber"
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
                    Hersteller
                  </label>
                  <input
                    {...register("manufacturer", { required: true })}
                    type="text"
                    name="manufacturer"
                    id="manufacturer"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="Geben Sie den Namen des Herstellers ein"
                  />
                </div>
              </div>

              <div>
                <button className="bg-gradient-to-b from-gray-700 to-gray-900 text-lg font-medium p-2 mt-2 md:pd-2 text-white uppercase w-full rounded cursor-pointer hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
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
