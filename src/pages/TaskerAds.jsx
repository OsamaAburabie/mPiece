import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
import Sidebar from "../components/Sidebar";

import TaskerAdCard from "../components/TaskerAdCard";
function TaskerAdsUpdate() {
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
    // <div className="min-h-screen grid grid-cols-1 md:grid-cols-12  gap-4 p-5"></div>
    <div className="min-h-screen w-screen">
      <div className="container w-full md:w-10/12 mx-auto p-4  grid grid-cols-12">
        <div className="col-span-12 h-40 bg-gray-200"></div>
        {/* //========================================================================================== */}
        <div className="col-span-0 hidden md:block md:col-span-5  "></div>
        {/* //========================================================================================== */}
        <div className="col-span-12 md:col-span-7 py-3 ">
          <div className="grid grid-cols-1 gap-3 place-items-start">
            {ads &&
              ads.map((el) => (
                <TaskerAdCard
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
        </div>
      </div>
    </div>
  );
}

export default TaskerAdsUpdate;
