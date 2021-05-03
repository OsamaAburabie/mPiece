import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import EditIcon from "@material-ui/icons/Edit";
import EditProfile from "../components/Common/EditProfile";
import axios from "axios";
import TaskerAdCard from "../components/TaskerAdCard";

function Profile() {
  const { myToken, isLoggedIn, role, email, img, username } = useContext(
    AuthContext
  );
  const [show, setShow] = useState(false);
  const [ads, setAds] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/myPosts`, {
        headers: {
          "x-auth-token": myToken,
        },
      })
      .then((res) => setAds(res.data));
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const filterAds = (id) => {
    setAds(ads.filter((el) => el._id !== id));
  };
  if (role === "tasker") {
    return (
      <div className="min-h-screen">
        <div className="w-full h-56 p-4 bg-secondary text-secondary grid place-items-center text-center">
          <div>
            <p className="text-7xl ">ملفك الشخصي</p>
          </div>
        </div>
        <div className=" bg-primary  grid md:grid-cols-2 grid-cols-1 p-2 gap-2">
          <div className=" grid gap-2 order-2 md:order-1 ">
            {ads &&
              ads.map((el) => (
                <TaskerAdCard
                  key={el._id}
                  title={el.title}
                  price={el.price}
                  location={el.location}
                  avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
                  taskerName={el.taskerInfo.name}
                  taskerId={el.taskerId}
                  // categoryId={catId}
                  adId={el._id}
                  date={el.createdAt}
                  filtering={filterAds}
                />
              ))}
          </div>
          <div
            dir="rtl"
            className="order-1 md:order-2 relative h-96 md:w-full bg-btn text-btn p-10  rounded-lg shadow-md grid place-items-center"
          >
            <div className="flex flex-wrap justify-center text-center">
              <img
                src={img}
                alt="anything"
                className="w-28 h-28 mb-3 md:w-28 md:h-28 object-cover rounded-full border-2"
              />
              <p className="text-2xl w-full"> الاسم: {username}</p>
              <p className="text-2xl w-full"> البريد الالكتروني: {email}</p>
            </div>

            <EditIcon
              onClick={() => setShow(true)}
              className="absolute left-0 top-0 m-4"
            />
          </div>
        </div>
        {show && <EditProfile handleShow={handleShow} />}
      </div>
    );
  } else {
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
}

export default Profile;
