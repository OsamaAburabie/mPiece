import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./SingleAdCard.css";
function SingleAdCard({
  title,
  price,
  location,
  avatar,
  taskerName,
  categoryId,
  adId,
  desc,
}) {
  return (
    <div dir="rtl" className="singleCard bg-secondary">
      <img
        src="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
        alt=""
      />
      <div className="p-4">
        <div className="flex items-center justify-end flex-wrap  ">
          <div className="flex flex-wrap justify-center text-center">
            {avatar && (
              <Avatar className="headerOption__icon" src={avatar}>
                {taskerName && taskerName[0]}
              </Avatar>
            )}
            <span className="text-sm block w-full text-gray-500 uppercase font-bold">
              اسامه
            </span>
          </div>
        </div>
        <span className="flex flex-col items-start ">
          <span className="font-bold mb-2 text-lg text-secondary ">
            {title}
          </span>
          <span className="text-md text-gray-500 uppercase font-bold">
            الموقع: {location}
          </span>
          <span className="text-md text-gray-500 uppercase font-bold">
            الأجرة/س: {price} دينار
          </span>
          <span className="text-md text-gray-500 uppercase font-bold">
            الوصف:{desc}
          </span>
        </span>
      </div>
    </div>
  );
}

export default SingleAdCard;
