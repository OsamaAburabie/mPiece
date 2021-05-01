import Sidebar from "../Sidebar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import EditCategory from "../EditCategory";

function ManageCategorie() {
  const [category, setCategory] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [min, setMin] = useState("");
  const [high, setHigh] = useState("");
  const { myToken } = useContext(AuthContext);
  const [selectedId, setSelectedId] = useState("");
  const [show, setShow] = useState(false);

  async function postCategory({ image, name, min, high }) {
    try {
      const formData = new FormData();
      formData.append("img", image);
      formData.append("name", name);
      formData.append("min", min);
      formData.append("high", high);

      const result = await axios.post(
        `http://localhost:5000/admins/addCategory`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": myToken,
          },
        }
      );
      if (result) {
        setCategory((prev) => [...prev, result.data]);
        setName("");
        setMin("");
        setHigh("");
      }
    } catch (error) {
      if (error) {
        setError(error.response.data.msg);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategory({
      image: file,
      name,
      min,
      high,
    });
  };

  const fetchCategory = () => {
    axios
      .get("http://localhost:5000/users/getallCategories")
      .then((res) => setCategory(res.data));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const deleteCategory = (catId) => {
    axios
      .delete(`http://localhost:5000/admins/deleteCategory/${catId}`, {
        headers: {
          "x-auth-token": myToken,
        },
      })
      .then((res) => setCategory(category.filter((el) => el._id !== catId)))
      .catch((err) => console.log(err));
  };

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="min-h-screen text-secondary flex">
      <Sidebar />
      <div className="flex-1 h-full">
        <div className=" bg-secondary p-3 flex justify-center items-center w-full">
          <form onSubmit={handleSubmit} className="flex flex-wrap w-full">
            <p className="text-2xl p-1">Add new category</p>
            <input
              className="w-full mb-3 border-none  p-3 rounded-md   bg-primary text-primary outline-none"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="w-full mb-3  border-none  p-3 rounded-md   bg-primary text-primary  outline-none"
              type="number"
              placeholder="Min"
              onChange={(e) => setMin(e.target.value)}
              value={min}
            />
            <input
              className="w-full mb-3  border-none  p-3 rounded-md   bg-primary text-primary  outline-none"
              type="number"
              placeholder="High"
              onChange={(e) => setHigh(e.target.value)}
              value={high}
            />
            <input
              className="w-full mb-3  border-none  p-3 rounded-md   bg-primary text-primary  outline-none"
              onChange={fileSelected}
              type="file"
              accept="image/*"
            ></input>
            <button
              type="submit "
              className="block bg-btn text-btn w-full p-2 text-lg"
            >
              Add
            </button>
          </form>
        </div>
        <table className="w-full  text-md bg-primary text-primary shadow-md rounded mb-4">
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
                <tr
                  key={el._id}
                  className="border-b hover:bg-orange-100 bg-secondary text-secondary"
                >
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
                      onClick={() => {
                        setSelectedId(el._id);
                        setShow(true);
                      }}
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(el._id)}
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
      {show && (
        <EditCategory
          handleShow={handleShow}
          id={selectedId}
          fetching={fetchCategory}
        />
      )}
    </div>
  );
}

export default ManageCategorie;
