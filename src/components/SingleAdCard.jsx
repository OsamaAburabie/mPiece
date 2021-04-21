import "./SingleAdCard.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
function SingleAdCard({
  title,
  price,
  location,
  avatar,
  taskerName,
  categoryId,
  adId,
  desc,
  img,
}) {
  return (
    <div dir="rtl" className="singleCard bg-secondary  shadow-sm">
      <img src={img} alt="add-pic" className=" rounded-b-none" />
      <div className="p-4 ">
        <span className="flex flex-col items-start ">
          <span className="font-bold  text-lg text-secondary ">{title}</span>
          <span className="text-md text-secondary ">
            <LocationOnIcon />
            الموقع: {location}
          </span>
          <span className="text-md text-secondary  ">
            <LocalAtmIcon />
            الأجرة/س: {price} دينار
          </span>
          <p className="text-md mt-3 text-secondary">التفاصيل:</p>
          <span className="text-md text-secondary  ">{desc}</span>
        </span>
      </div>
    </div>
  );
}

export default SingleAdCard;
