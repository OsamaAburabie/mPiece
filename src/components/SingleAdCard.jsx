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
}) {
  return (
    <div dir="rtl" className="singleCard bg-secondary rounded-xl shadow-md">
      <img
        src="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
        alt="add-pic"
        className="rounded-xl rounded-b-none"
      />
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
          <p className="text-md text-secondary">التفاصيل:</p>
          <span className="text-md text-secondary  ">{desc}</span>
        </span>
      </div>
    </div>
  );
}

export default SingleAdCard;
