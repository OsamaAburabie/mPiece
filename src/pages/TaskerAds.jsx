import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdsCard from "../components/AdsCard";
import NotFound from "./NotFound";
import Sidebar from "../components/Sidebar";
function TaskerAds() {
  const { catId } = useParams();
  const [ads, setAds] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getallfromCategory/${catId}`)
      .then((res) => setAds(res.data));
  }, []);

  if (ads && ads.length === 0) return <NotFound />;

  if (!ads) return <div className=" bg-primary h-screen"></div>;
  return (
    <div dir="rtl" className="w-screen flex p-3">
      <div className="  w-full md:w-9/12 flex flex-wrap items-center  ">
        {ads &&
          ads.map((el) => (
            <AdsCard
              key={el._id}
              title={el.title}
              price={el.price}
              location={el.location}
              avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
              taskerName={el.taskerInfo.name}
              taskerId={el.taskerInfo.uid}
              categoryId={catId}
              adId={el._id}
            />
          ))}
      </div>
      <Sidebar />
    </div>
  );
}

export default TaskerAds;
