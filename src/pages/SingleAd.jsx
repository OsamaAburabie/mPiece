import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleAdCard from "../components/SingleAdCard";
import "./SingleAd.css";
import Rate from "../components/Rate";

function SingleAd() {
  const { adId, taskerId } = useParams();
  const [ad, setAd] = useState();
  const [tasker, setTasker] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getSingleAd/${adId}`)
      .then((res) => setAd(res.data));
    axios
      .get(`http://localhost:5000/users/taskerInfo/${taskerId}`)
      .then((res) => setTasker(res.data.tasker));
  }, []);

  //==========================================================================
  // useEffect(() => {
  //   if (ad) {
  //     axios
  //       .get(`http://localhost:5000/users/taskerInfo/${ad?.taskerInf o?.uid}`)
  //       .then((res) => setTasker(res.data.tasker));
  //   }
  // }, [ad]);

  //=========================================================================get the rating

  // const getNum = () => {
  //   let sum = 0;
  //   const totalRate = (obj) => {
  //     sum += obj["rate"];
  //     setValue(sum);
  //   };
  //   tasker && tasker.rating.map(totalRate);

  //   console.log(`total ${sum}`);
  // };

  return (
    <div dir="rtl" className="w-screen  flex p-3">
      <div className="  w-full md:w-9/12 flex flex-wrap ">
        <SingleAdCard
          title={ad?.title}
          price={ad?.price}
          location={ad?.location}
          desc={ad?.desc}
          taskerName={ad?.taskerInfo.name}
          avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
        />
      </div>
      {/* ============================================================================================================ */}
      <div className="w-0 md:w-1/4 hidden md:flex  flex-grow-1 bg-secondary mr-3">
        <div dir="rtl" className="con__card">
          <div className="con__card__upper">
            <img
              src="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
              alt="anything"
              className="w-20 h-20"
            />
          </div>
          <span className="text-center block text-secondary">
            {tasker?.name}
          </span>
          <div className="w-full">
            <Rate rating={tasker?.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleAd;
