import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import EditIcon from "@material-ui/icons/Edit";
import EditProfile from "../components/Common/EditProfile";

function Profile() {
  const { myToken, isLoggedIn, role, email, img, username } = useContext(
    AuthContext
  );
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" min-h-screen">
      <div className="w-full h-72 p-4 bg-secondary text-secondary grid place-items-center text-center">
        <div>
          <p className="text-7xl ">ملفك الشخصي</p>
        </div>
      </div>
      <div className="grid place-items-center">
        <div
          dir="rtl"
          className="relative mx-4 md:w-1/2 bg-btn text-btn p-10 my-20 rounded-lg shadow-md grid place-items-left"
        >
          <div>
            <img
              src={img}
              alt="anything"
              className="w-28 h-28 mb-3 md:w-28 md:h-28 object-cover rounded-full border-2"
            />
            <p className="text-2xl"> الاسم: {username}</p>
            <p className="text-2xl"> البريد الالكتروني: {email}</p>
          </div>

          <button>
            <EditIcon
              onClick={() => setShow(true)}
              className="absolute left-0 top-0 m-4"
            />
          </button>
        </div>
      </div>
      {show && <EditProfile handleShow={handleShow} />}
    </div>
  );
}

export default Profile;
