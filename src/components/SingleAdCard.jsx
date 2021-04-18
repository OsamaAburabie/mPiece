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
        src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2018/11/cleanSick-628306310_770x533-650x428.jpg"
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
          <p className="text-md mt-3 text-secondary">التفاصيل:</p>
          <span className="text-md text-secondary  ">{desc}</span>
        </span>
      </div>
    </div>
  );
}

export default SingleAdCard;
