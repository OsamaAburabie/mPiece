import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdsCard from "../components/AdsCard";
function TaskerAds() {
  const { id } = useParams();
  const [ads, setAds] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getallfromCategory/${id}`)
      .then((res) => setAds(res.data));
  }, []);

  return (
    <>
      {/* component */}
      <div className=" bg-primary h-screen mb-10 ">
        {ads &&
          ads.map((el) => (
            <AdsCard
              key={el._id}
              title={el.title}
              price={el.price}
              location={el.location}
            />
          ))}
      </div>
    </>
  );
}

export default TaskerAds;
