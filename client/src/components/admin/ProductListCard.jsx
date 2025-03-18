import { NavLink } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

export default function ProductListCard({ product }) {
  const { setProductList, productList, rangeList } = useContext(AuthContext);

  console.log(product);
  console.log(rangeList);

  const modalRef = useRef(null);

  const deleteProduct = () => {
    axiosClient
      .delete(`product/deleteProduct/${product._id}`)
      .then(() => {
        return axiosClient.get("product/getAllProducts");
      })
      .then((response) => {
        setProductList(response.data);
        toast.success("Produkt gelöscht!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatNumber = (num) => {
    const str = num.toString();
    if (str.length === 5) {
      return `${str.slice(0, 2)} ${str.slice(2)}`;
    } else if (str.length === 6) {
      return `${str.slice(0, 3)} ${str.slice(3)}`;
    } else if (str.length === 7) {
      return `${str.slice(0, 1)} ${str.slice(1, 4)} ${str.slice(4)}`;
    }
    return str;
  };

  return (
    <>
      <tr className="text-center">
        <td className="px-4 whitespace-nowrap">
          <div className="btn w-[100px] bg-slate-100 text-slate-800 hover:bg-white-900">
            {formatNumber(product.internNumber)}
          </div>
        </td>
        <td className="px-4 whitespace-nowrap">
          <div className="btn w-[100px] bg-slate-100 text-slate-800 hover:bg-white-900">
            {formatNumber(product.manufacturerNumber)}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">
            {product.manufacturer}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            className={
              product.info === "" || product?.info === null
                ? "text-gray-900"
                : "text-sm font-medium text-red-500"
            }
          >
            {product.info === "" || product?.info === null ? "-" : product.info}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">
            {(() => {
              const matchingRange = rangeList.find(
                (range) =>
                  (product.internNumber >= range.rangeStart &&
                    product.internNumber <= range.rangeEnd) ||
                  (product.manufacturerNumber >= range.manufacturerRangeStart &&
                    product.manufacturerNumber <= range.manufacturerRangeEnd)
              );

              return matchingRange?.certificate ? (
                <NavLink
                  href={matchingRange.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Certificate
                </NavLink>
              ) : (
                "Kein vorhanden"
              );
            })()}
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">
            {(() => {
              const matchingRange = rangeList.find(
                (range) =>
                  (product.internNumber >= range.rangeStart &&
                    product.internNumber <= range.rangeEnd) ||
                  (product.manufacturerNumber >= range.manufacturerRangeStart &&
                    product.manufacturerNumber <= range.manufacturerRangeEnd)
              );

              return matchingRange?.internCertificate ||
                matchingRange?.manufacturerCertificate ? (
                <>
                  {matchingRange.internCertificate && (
                    <NavLink
                      href={matchingRange.internCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline block"
                    >
                      Intern Certificate
                    </NavLink>
                  )}
                  {matchingRange.manufacturerCertificate && (
                    <NavLink
                      href={matchingRange.manufacturerCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline block"
                    >
                      Manufacturer Certificate
                    </NavLink>
                  )}
                </>
              ) : (
                "Kein vorhanden"
              );
            })()}
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex gap-3 justify-center">
            <button
              className="h-8 max-h-[32px] w-8 max-w-[32px] bg-stone-200 select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-blue-500 transition-all active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition-transform duration-300 transform hover:scale-125"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <NavLink to={`/admin/editProduct/${product._id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5s-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593s.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316s.473-.352.898-.777l6.89-6.89a12.9 12.9 0 0 1-4.02-3.98"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </NavLink>
              </span>
            </button>
            <button
              className="h-8 max-h-[32px] w-8 max-w-[32px] bg-stone-200 select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-600 transition-all active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition-transform duration-300 transform hover:scale-125"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  onClick={() => modalRef.current.showModal()}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.774 5L3.758 3.94l.174-.986a.5.5 0 0 1 .58-.405L18.411 5h.088h-.087l1.855.327a.5.5 0 0 1 .406.58l-.174.984l-2.09-.368l-.8 13.594A2 2 0 0 1 15.615 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5h12.69zH5.5zM9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9zm-2.646-7.871l3.94.694a.5.5 0 0 1 .405.58l-.174.984l-4.924-.868l.174-.985a.5.5 0 0 1 .58-.405z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </td>
      </tr>

      <dialog ref={modalRef} id="deleteClass" className="modal">
        <div className="modal-box max-w-3xl">
          <div
            className="flex items-center p-3 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Achtung!</span> Du bist dabei, den
              folgenden Artikel zu löschen!
            </div>
          </div>
          <div
            className="flex justify-center p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="sr-only">Info</span>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Interne Fl.Nr.</span>
                  <span className="text-center text-[20px]">
                    {product.internNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Hersteller Fl.Nr.</span>
                  <span className="text-center text-[20px]">
                    {product.manufacturerNumber}
                  </span>
                </div>{" "}
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Hersteller.</span>
                  <span className="text-center text-[20px]">
                    {product.manufacturer}
                  </span>
                </div>
              </div>

              <span className="font-medium">
                Bitte beachten, dass der einmal gelöschte Artikel nicht
                wiederhergestellt werden kann!
              </span>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog" className="flex gap-2">
              <button
                onClick={deleteProduct}
                className="btn w-28 bg-red-500 text-white hover:bg-red-700"
              >
                Löschen
              </button>
              <button className="btn w-28">Abbrechen</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
