import { NavLink } from "react-router-dom"
import axiosClient from "../../utils/axiosClient";

export default function ProductListCard({ product }) {
    axiosClient.delete(`product/deleteProduct/${product._id}`).then(() => {
        console.log("deleted").catch((error) => {
            console.log(error)
        })
    })

  return (
    <tr className="text-center">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {product.internNumber}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {product.manufacturerNumber}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {product.manufacturer}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          TBD
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
        {product.info}

        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex gap-2 justify-center">
        <NavLink to={`/admin/editProduct/${product._id}`} className="text-sm font-medium text-gray-900">
        Edit

        </NavLink>
        <div className="text-sm font-medium text-gray-900">
        Delete

        </div>
        </div>

      </td>
    </tr>
  );
}
