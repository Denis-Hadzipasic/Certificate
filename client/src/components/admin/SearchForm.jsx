import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function SearchForm() {
  const { user } = useContext(AuthContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryManufacturer, setSearchQueryManufacturer] = useState("");
  const navigate = useNavigate();

    console.log(user.role)

    const handleSearch = () => {
        const searchUrl = user.role === "admin"
          ? `/admin/searchDatabase?internNumber=${searchQuery}&manufacturerNumber=${searchQueryManufacturer}`
          : `/user/searchDatabase?internNumber=${searchQuery}&manufacturerNumber=${searchQueryManufacturer}`;
      
        navigate(searchUrl);
      };
      
  return (
    <div className="w-full max-w-[700px] bg-white mb-3">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1">
            Interne Flaschennummer:
          </label>
          <input
            type="text"
            placeholder="X XXX XXX"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[40px] py-1 px-3 border border-gray-300 rounded-md"
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
            onChange={(e) => setSearchQueryManufacturer(e.target.value)}
            className="w-full h-[40px] py-1 px-3 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleSearch}
          className="flex-1 h-[40px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
        >
          Suchen
        </button>
      </div>
    </div>
  );
}
