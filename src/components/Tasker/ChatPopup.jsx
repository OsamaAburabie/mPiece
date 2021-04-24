/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import SendIcon from "@material-ui/icons/Send";
import PopupMessages from "./PopupMessages";

export default function DeletePopup({ id, handleShow, taskId, fetching }) {
  const [open, setOpen] = useState(true);
  const [estimatedTime, setEstimatedTime] = useState("");
  const [task, setTask] = useState();
  const [loading, setLoading] = useState(true);
  const cancelButtonRef = useRef();
  const [working, setWorking] = useState(undefined);
  const [changeButton, SetChangeButton] = useState(false);
  const {
    isLoggedIn,
    role,
    username,
    pendingCon,
    checkLoggedIn,
    setPendingCon,
    myToken,
    notification,
    setNotification,
    setLoggedIn,
  } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/singleTask/${taskId}`, {
        headers: {
          "x-auth-token": myToken,
        },
      })
      .then((res) => {
        setTask(...res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setWorking(task?.working);
  }, [task]);

  const handleShit = () => {
    setOpen(false);
    handleShow();
  };

  const ChangeStatus = (e) => {
    //the backend will response with the changed status then it will be set to ticketStatus state
    axios
      .put(
        `http://localhost:5000/users/editTask/${taskId}`,
        { working: e.target.value },
        {
          headers: { "x-auth-token": myToken },
        }
      )
      .then((res) => {
        setWorking(res.data.working);
        fetching();
      })
      .catch((err) => err.response.data.msg && console.log(err));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log();
    axios
      .put(
        `http://localhost:5000/users/editTask/${taskId}`,
        { working, menutes: parseInt(estimatedTime) },
        {
          headers: { "x-auth-token": myToken },
        }
      )
      .then((res) => {
        setWorking(res.data.working);
        fetching();
        handleShit();
      })
      .catch((err) => err.response.data.msg && console.log(err));
  };

  if (loading) return <></>;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={handleShit}
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-5 transition-opacity" />
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
              <div className="bg-secondary py-2 px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className=" flex flex-wrap justify-center items-center w-full">
                    <form
                      onSubmit={handleUpdate}
                      className="flex flex-wrap w-full"
                    >
                      <select
                        onChange={(e) => {
                          setWorking(e.target.value);
                          SetChangeButton(true);
                        }}
                        value={working}
                        className="w-full mb-2 border  p-2 rounded-md  bg-secondary text-secondary outline-none"
                      >
                        <option value={1}>معلق</option>
                        <option value={2}>جار العمل</option>
                      </select>
                      <input
                        value={estimatedTime}
                        className="w-full mb-2 border  p-2 rounded-md  bg-secondary text-secondary outline-none"
                        type="number"
                        placeholder="الوقت المقدر بالدقائق"
                        onChange={(e) => {
                          setEstimatedTime(e.target.value);
                          SetChangeButton(true);
                        }}
                      />
                      {changeButton && (
                        <div className="mb-2">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mb-2 md:mb-0 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            حفظ التغييرات
                          </button>
                        </div>
                      )}
                    </form>
                    <div className="w-full  bg-primary p-2">
                      <PopupMessages
                        TaskId={task && task?._id}
                        messages={task && task?.messages}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
