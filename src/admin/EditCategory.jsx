/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
export default function EditCategory({ id, handleShow, fetching }) {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState("");
  const cancelButtonRef = useRef();

  const [name, setName] = useState("");
  const [min, setMin] = useState("");
  const [high, setHigh] = useState("");
  const { myToken, isLoggedIn, role, connections, pendingCon } = useContext(
    AuthContext
  );

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admins/singleCategory/${id}`)
      .then((res) => {
        setName(res.data.name);
        setMin(res.data.min);
        setHigh(res.data.high);
      });
  }, []);

  async function postCategory({ image, name, min, high }) {
    try {
      const formData = new FormData();
      formData.append("img", image);
      formData.append("name", name);
      formData.append("min", min);
      formData.append("high", high);

      const result = await axios.put(
        `http://localhost:5000/admins/editCategory/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": myToken,
          },
        }
      );
      if (result) {
        setError(result.data);
      }
    } catch (error) {
      if (error) {
        setError(error.response.data.msg);
      }
    }
  }

  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategory({
      image: file,
      name,
      min,
      high,
    });
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleClose = () => {
    setOpen(false);
    handleShow();
    fetching();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              dir="rtl"
              className="inline-block align-bottom bg-secondary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-secondary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {error && (
                  <div className="w-full text-center pb-2 text-red-600">
                    <label>{error}</label>
                  </div>
                )}
                <div className="sm:flex sm:items-start">
                  <div className=" flex justify-center items-center w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-wrap w-full"
                    >
                      <p className="text-2xl p-1">Edit Category</p>
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
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-primary px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex justify-center "></div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
