import TaskerRating from "../components/TaskerRating";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { NavLink } from "react-router-dom";
import AdCardTaskerInfo from "./Tasker/AdCardTaskerInfo";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import "./skelton.css";
import { useContext, useState } from "react";
import Moment from "react-moment";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
function TaskerAdCard({
  title,
  price,
  location,
  avatar,
  taskerName,
  taskerId,
  categoryId,
  adId,
  date,
  filtering,
}) {
  const [loading, setLoading] = useState(true);
  const { myId, myToken } = useContext(AuthContext);

  const handleLoading = () => {
    setLoading(false);
  };

  const deleteAd = (id) => {
    axios
      .delete(`http://localhost:5000/api/deletePost/${id}`, {
        headers: {
          "x-auth-token": myToken,
        },
      })
      .then((res) => filtering(id));
  };

  return (
    <div
      dir="rtl"
      className="w-full h-56 md:h-52  rounded-md shadow-md bg-secondary flex"
    >
      <AdCardTaskerInfo
        taskerId={taskerId}
        adId={adId}
        handleLoading={handleLoading}
      />
      <div className="h-full w-full p-4 text-secondary flex items-center relative  ">
        <ReactPlaceholder
          type="media"
          style={{ width: "100%", height: "10rem" }}
          rows={5}
          ready={!loading}
        >
          <div className="flex flex-wrap ">
            <div className="overflow-hidden max-h-24 md:max-h-18">
              <p className="text-xl ">{title}</p>
            </div>
            <div className="w-full  flex md:block flex-wrap">
              <p className="ml-2 md:ml-0">
                <LocationOnIcon className="ml-1" />
                {location}
              </p>
              <p>
                <LocalAtmIcon className="ml-1" />
                {price}د/س
              </p>
              <div className="w-full flex mt-3">
                {/* <span className="ml-2 bg-primary p-1 rounded-md">المنزل</span>
                <span className="ml-2 bg-primary p-1 rounded-md">مكيفات</span>
                <span className="ml-2 bg-primary p-1 rounded-md">تصليح</span> */}
                <AccessTimeIcon className="ml-2" />
                <Moment locale="ar" format="YYYY/MM/DD">
                  {date}
                </Moment>
              </div>
              <NavLink
                to={`/services/${adId}/${taskerId}`}
                className=" bg-btn mt-1 md:hidden text-btn w-full p-1 rounded-md text-center"
              >
                التفاصيل
              </NavLink>
            </div>
          </div>

          {myId === taskerId && (
            <>
              <DeleteIcon
                onClick={() => deleteAd(adId)}
                className="absolute top-3 left-3 cursor-pointer"
              />
              <EditIcon className="absolute top-3 left-10 cursor-pointer" />
            </>
          )}
        </ReactPlaceholder>
      </div>
    </div>
  );
}

export default TaskerAdCard;
