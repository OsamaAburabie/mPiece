import Sidebar from "../Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function ManageCategorie() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getallCategories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <div className="min-h-screen text-secondary flex">
      <Sidebar />

      <table className="flex-1 h-full text-md bg-primary text-primary shadow-md rounded mb-4">
        <tbody className=" ">
          <tr className="border-b">
            <th className="text-left p-3 px-5">Picture</th>
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Min</th>
            <th className="text-left p-3 px-5">high</th>
            <th />
          </tr>
          {category &&
            category.map((el) => (
              <tr className="border-b hover:bg-orange-100 bg-secondary text-secondary">
                <td className="p-3 px-5">
                  <img
                    className="w-20 h-20 object-cover"
                    src={el.picture}
                    alt=""
                  />
                </td>
                <td className="p-3 px-5">{el.name}</td>
                <td className="p-3 px-5">{el.min}</td>
                <td className="p-3 px-5">{el.high}</td>
                <td className="p-3 px-5 flex justify-center items-center h-full">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCategorie;
