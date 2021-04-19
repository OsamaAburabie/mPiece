import TaskerRating from "../components/TaskerRating";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { NavLink } from "react-router-dom";
function TaskerAdCard({
  title,
  price,
  location,
  avatar,
  taskerName,
  taskerId,
  categoryId,
  adId,
}) {
  return (
    <div
      dir="rtl"
      className="w-full h-56 md:h-52  rounded-md shadow-md bg-secondary flex"
    >
      <div className="h-full w-54 flex justify-center items-center  py-1 flex-wrap">
        <div className="w-full flex justify-center flex-wrap  border-l">
          <img
            src="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
            alt="anything"
            className="w-28 h-28 md:w-24 md:h-24 object-cover rounded-full"
          />
          <div className="w-full  text-center px-2 text-secondary">
            <span className="capitalize">{taskerName}</span>
            <TaskerRating taskerId={taskerId} />
            <NavLink
              to={`/services/${adId}/${taskerId}`}
              className="hidden bg-btn mt-1 md:block text-btn w-full p-1 rounded-md"
            >
              التفاصيل
            </NavLink>
          </div>
        </div>
      </div>
      <div className="h-full w-full p-4 text-secondary flex items-center  ">
        <div className="flex flex-wrap">
          <div className="overflow-hidden max-h-24 md:max-h-18">
            <p className="text-xl ">{title}</p>
          </div>
          <div className="w-full flex md:block flex-wrap">
            <p className="ml-2 md:ml-0">
              <LocationOnIcon className="ml-1" />
              {location}
            </p>
            <p>
              <LocalAtmIcon className="ml-1" />
              {price}د/س
            </p>
            <div className="w-full flex my-2">
              <span className="ml-2 bg-primary p-1 rounded-md">المنزل</span>
              <span className="ml-2 bg-primary p-1 rounded-md">مكيفات</span>
              <span className="ml-2 bg-primary p-1 rounded-md">تصليح</span>
            </div>
            <NavLink
              to={`/services/${adId}/${taskerId}`}
              className=" bg-btn mt-1 md:hidden text-btn w-full p-1 rounded-md text-center"
            >
              التفاصيل
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskerAdCard;
