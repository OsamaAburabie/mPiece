import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import SendIcon from "@material-ui/icons/Send";
import Moment from "react-moment";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
function Messages({ messages, taskerId, myTaskId }) {
  const [myMessage, setMyMessages] = useState();
  const [text, setText] = useState("");

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
    myId,
  } = useContext(AuthContext);

  useEffect(() => {
    setMyMessages(messages);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text,
    };

    axios
      .post(
        `http://localhost:5000/users/sendMessage/${myTaskId}/${taskerId}`,
        data,
        {
          headers: {
            "x-auth-token": myToken,
          },
        }
      )
      .then((res) => {
        setMyMessages((prev) => [...prev, res.data]);

        setText("");
      });
  };

  return (
    <div
      dir="rtl"
      className=" w-full md:w-7/12 p-10 bg-secondary text-secondary shadow-md rounded-lg mb-10"
    >
      <div className="max-h-96 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent overflow-y-auto mb-3">
        {myMessage &&
          myMessage.map((el) => (
            <div key={el._id} className=" mb-4  w-full">
              <div className="bg-primary p-3 rounded-2xl shadow-sm">
                <p>
                  <span className="ml-2">{el.username}:</span>
                  {el.text}
                </p>
                {/* <AccessTimeIcon className="ml-2" /> */}
                <div dir="ltr">
                  <Moment locale="en" format="LT ">
                    {el?.createdAt}
                  </Moment>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div dir="rtl" className="w-full flex flex-wrap ">
        <form onSubmit={handleSubmit} dir="rtl" className="w-full flex ">
          <input
            value={text}
            type="text"
            placeholder="ارسل رساله"
            className="p-2 w-full text-black focus:outline-none border ml-2"
            onChange={(e) => setText(e.target.value)}
          />
          <button className="p-2 bg-primary w-11 rounded-full">
            <SendIcon className="transform rotate-180" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
