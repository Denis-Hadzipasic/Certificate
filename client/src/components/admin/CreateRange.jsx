import axiosClient from "../../utils/axiosClient";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateCertificateRange() {
  const { setRangeList } = useContext(AuthContext);

  const [fileName, setFileName] = useState("");
  const [fileNameManufacturer, setFileNameManufacturer] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    formState: { errors },
  } = useForm();

  // const certificateFile = watch("certificate");

  const onSubmit = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "internCertificate" && key !== "manufacturerCertificate") {
        formData.append(key, data[key]);
      }
    });

    if (data.internCertificate) {
      formData.append("internCertificate", data.internCertificate);
    }
  
    if (data.manufacturerCertificate) {
      formData.append("manufacturerCertificate", data.manufacturerCertificate);
    }

    axiosClient
      .post("/range/createRange", formData)
      .then(() => axiosClient.get("/range/getAllRanges"))
      .then((response) => {
        setRangeList(response.data);
        toast.success("Nummernkreis erstellt!");
        navigate("/admin/rangeList");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error("Nummernkreis schon vorhanden");
          } else if (error.response.status === 400) {
            toast.error("Fl.-Nr bis darf nicht kleiner als Fl.-Nr von!");
          } else {
            toast.error("Die Dateigröße überschreitet 10 MB!");
          }
        } else {
          toast.error("Netzwerkfehler oder Server nicht erreichbar!");
        }
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
                      Interne Fl.-Nr. von:
                    </label>
                    <input
                      {...register("rangeStart", { required: true })}
                      type="text"
                      name="rangeStart"
                      id="rangeStart"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Interne-Flaschennummer von"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="rangeEnd"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Interne Fl.-Nr. bis:
                    </label>
                    <input
                      {...register("rangeEnd", { required: true })}
                      type="text"
                      name="rangeEnd"
                      id="rangeEnd"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      placeholder="Interne-Flaschennummer bis"
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
                      placeholder="Hersteller-Flaschennummer von"
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
                      placeholder="Hersteller-Flaschennummer bis"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-around w-full px-3">
                <div className="mb-5 flex flex-col items-center">
                  <label
                    htmlFor="internCertificate"
                    className="mb-3 block text-lg font-medium text-[#07074D] text-center"
                  >
                    Zertifikat
                    <span className="text-gray-600 text-sm">
                      {" (Falls vorhanden)"}
                    </span>
                    :
                  </label>

                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="internCertificate"
                      className="flex items-center bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-1.5 outline-none rounded w-max cursor-pointer font-[sans-serif]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 mr-2 fill-white inline"
                        viewBox="0 0 32 32"
                      >
                        <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                        <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
                      </svg>
                      Datei auswählen
                      <input
                        type="file"
                        id="internCertificate"
                        accept="application/pdf"
                        onChange={(e) => {
                          if (e.target.files.length > 0) {
                            setValue("internCertificate", e.target.files[0]);
                            setFileName(e.target.files[0].name);
                          } else {
                            setValue("internCertificate", null);
                            setFileName("");
                          }
                        }}
                        className="hidden"
                      />
                    </label>

                    {fileName && (
                      <p className="mt-5 text-sm text-gray-600 dark:text-gray-300 text-center">
                        <span className="font-bold">Ausgewählte Datei: </span>
                        {fileName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5 flex flex-col items-center">
                  <label
                    htmlFor="manufacturerCertificate"
                    className="mb-3 block text-lg font-medium text-[#07074D] text-center"
                  >
                    Herrstellerzertifikat
                    <span className="text-gray-600 text-sm">
                      {" (Falls vorhanden)"}
                    </span>
                    :
                  </label>

                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="manufacturerCertificate"
                      className="flex items-center bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-1.5 outline-none rounded w-max cursor-pointer font-[sans-serif]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 mr-2 fill-white inline"
                        viewBox="0 0 32 32"
                      >
                        <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                        <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
                      </svg>
                      Datei auswählen
                      <input
                        type="file"
                        id="manufacturerCertificate"
                        accept="application/pdf"
                        onChange={(e) => {
                          if (e.target.files.length > 0) {
                            setValue("manufacturerCertificate", e.target.files[0]);
                            setFileNameManufacturer(e.target.files[0].name);
                          } else {
                            setValue("manufacturerCertificate", null);
                            setFileNameManufacturer("");
                          }
                        }}
                        className="hidden"
                      />
                    </label>

                    {fileNameManufacturer && (
                      <p className="mt-5 text-sm text-gray-600 dark:text-gray-300 text-center">
                        <span className="font-bold">Ausgewählte Datei: </span>
                        {fileNameManufacturer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-gradient-to-b from-gray-700 to-gray-900 text-lg font-medium p-2 md:pd-2 text-white uppercase w-48 rounded cursor-pointer hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
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
